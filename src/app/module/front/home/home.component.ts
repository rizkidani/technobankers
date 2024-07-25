import { Component } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import 'flowbite';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home/home-service.service';
import { HomeModel } from './model/home.model';
import { BookService } from 'src/app/services/book/book.service';
import { DetailBookModel } from '../detail-book/model/detail-book.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  detailModel = new DetailBookModel();
  homeModel = new HomeModel();
  dataSlider: any = {};

  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly homeService: HomeServiceService,
    private readonly bookService: BookService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {

    this.homeService.getSlider().subscribe(
      (response) => {
        this.homeModel.allDataSlider = response.data;
        console.log(this.homeModel.allDataSlider)
      });

    this.bookService.getListBook().subscribe(
      (response) => {
        this.homeModel.allListBook = response.data;
      });

    }

  buyEbook() {
    if (this.authService.isLogin()) {
      let userData = this.authService.loadUserData();
      this.activatedRoute.paramMap.subscribe((data: any) => {
        let id = "1" // id book technobanker
        this.detailModel.formBuyBook.controls['bookId'].setValue(id);
        this.detailModel.formBuyBook.controls['userId'].setValue(userData.userId);
        this.detailModel.formBuyBook.controls['bookQuantity'].setValue('1');
        this.bookService.checkOutBook(this.detailModel.formBuyBook.value).subscribe(
          (response: any) => {
            // Simpan respons ke local storage
            localStorage.setItem('checkoutResponse', JSON.stringify(response));
            localStorage.setItem('checkoutQuantityResponse', JSON.stringify(1));
            this.router.navigate(["transaction-checkout"]);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        );
      });
    } else {
      // Jika pengguna belum login, arahkan ke halaman login
      this.router.navigate(['login']);
    }
  }

  goToOurLibrary() {
    this.router.navigate(["our-library"]);
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
