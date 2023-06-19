import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home/home-service.service';
import { HomeModel } from '../home/model/home.model';
import { BookService } from 'src/app/services/book/book.service';
import { DetailBookModel } from '../detail-book/model/detail-book.model';

@Component({
  selector: 'app-our-library',
  templateUrl: './our-library.component.html',
  styleUrls: ['./our-library.component.scss']
})
export class OurLibraryComponent {

  detailModel = new DetailBookModel();
  homeModel = new HomeModel();
  book: any = {};
  authorOfBook: any = {};
  writer: any = {};

  constructor(
    private readonly router: Router,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {

    this.bookService.getListBook().subscribe(
      (response) => {
        this.homeModel.allListBook = response.data;
        this.book = this.homeModel.allListBook;
        this.homeModel.author = response.data.authorOfBook;
      });

    }

  goToDetailBook() {
    this.book.bookId;
    this.router.navigate([`detail-book/${this.book.bookId}`]);
  }

  goToHome() {
    this.router.navigate([""]);
  }

}
