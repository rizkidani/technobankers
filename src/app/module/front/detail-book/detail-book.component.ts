import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DetailBookModel } from './model/detail-book.model';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import 'flowbite';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent {

  detailModel = new DetailBookModel();
  submitted: boolean = false;
  book: any = {};
  previewsOfBook: any = {};
  isLoading = false;
  authorOfBook: any = {};
  ratingLength!:number
  // Series: any;

  toggleLoading = () => {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  };

  @Input() maxRating: number = 5;
  currentRating: number = 0;
  stars: number[] = [];

  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private readonly bookService: BookService,
    public authService: AuthService
  ) {
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          bookId: id,
        }

      this.bookService.getDetailBook(params).subscribe(
        (response: any) => {
          this.detailModel.singleBook = response.data;
          this.book = this.detailModel.singleBook;
          this.detailModel.authorOfBook = response.data.authorOfBook;
          this.detailModel.roles = response.data.rolesOfBook
          this.detailModel.keywordOfBook = response.data.keywordOfBook;
          this.detailModel.previewsOfBook = response.data.previewsOfBook;
          this.previewsOfBook = this.detailModel.previewsOfBook;
          this.ratingLength = this.book.bookReviewList.length
        })
    })
  }

  submitEmail() {
      // Menambahkan observer untuk perubahan nilai clientNumber
      this.detailModel.formGroupEmail.controls['clientNumber'].valueChanges.subscribe(value => {
        if (value && !value.startsWith('62')) {
          this.detailModel.formGroupEmail.controls['clientNumber'].setValue('62' + value);
        }
      });
      this.activatedRoute.paramMap.subscribe((data: any ) => {
       let id = data.params.id
        this.detailModel.formGroupEmail.controls['bookId'].setValue(id);
        this.bookService.submitEmail(this.detailModel.formGroupEmail.value).subscribe(
          (response) => {
            this.bookService.submitEmail(response.data);
            this.submitted = true;
            this.toastr.success('Email successfully send!', 'Success');
          },
          (error) => {
            this.router.navigate(['/pdf-not-found'])
          }
          )
        })
      }

   rate(star: number): void {
    this.currentRating = star;
    this.detailModel.formGroupRating.controls['bookReviewRating'].setValue(this.currentRating); // Mengatur nilai FormControl sesuai dengan bintang yang diklik
  }

  submitRating() {
  this.activatedRoute.paramMap.subscribe((data: any ) => {
    let id = data.params.id
      this.detailModel.formGroupRating.controls['bookId'].setValue(id);
      this.bookService.addReview(this.detailModel.formGroupRating.value).subscribe(
        (response) => {
          this.toastr.success('Rating successfully created!', 'Success');
          setTimeout(() => {
            window.location.reload();
          }, 2000); // Atur waktu delay sebelum reload halaman, dalam milidetik (di sini 2000ms atau 2 detik)
        },
        (error) => {
        }
        )
      })
    }
  

  goToLibrary() {
    this.router.navigate(["our-library"]);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.detailModel.formGroupEmail.controls;
  }

  routeToPaymentEbook() {
    this.router.navigate(["transaction-checkout"])
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  buyEbook() {
    if (this.authService.isLogin()) {
      let userData = this.authService.loadUserData();
      this.activatedRoute.paramMap.subscribe((data: any ) => {
        let id = data.params.id;
        this.detailModel.formBuyBook.controls['bookId'].setValue(id);
        this.detailModel.formBuyBook.controls['userId'].setValue(userData.userId);
        this.detailModel.formBuyBook.controls['bookQuantity'].setValue('1');
        this.bookService.checkOutBook(this.detailModel.formBuyBook.value).subscribe(
          (response: any) => {
            this.router.navigate(["transaction-checkout"]);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        );
      });
    } else {
      // Jika pengguna belum login, arahkan ke halaman login
      this.router.navigate(['login']);
    }
  }
  

}
