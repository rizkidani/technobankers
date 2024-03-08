import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import { DetailBookModel } from '../detail-book/model/detail-book.model';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent {

  dataEbook: any = []
  detailModel= new DetailBookModel
  author:any

  constructor(
    private bookService: BookService,
    private authService: AuthService
  ) {}

  ngOnInit():void{
    if (this.authService.isLogin()) {
      let userData = this.authService.loadUserData();
      this.detailModel.formBuyBook.controls['userId'].setValue(userData.userId);
      this.bookService.getEBook(this.detailModel.formBuyBook.value).subscribe(
        (response: any) => {
          this.dataEbook = response.data
          this.author = response.data.authorOfBook
        }
      )
    }
  }
}
