import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  books: any;
  authorOfBook: any = {};
  writer: any = {};
  bookPartly : any = {};

  // pagination
  p: number = 1; // Current page
  pageSize: number = 6; // Initial items per page

  enteredSearchValue: string = ''; // Stores the search query
  items: any[] = []; // Array containing all items
  filteredItems: any[] = []; // Array to store filtered items
  onSearch: boolean = false;
  hide: boolean = true;
  fill = '';
  
  search() {
    if (!this.enteredSearchValue) {
      this.ngOnInit();
    } else {
      this.p = 1;
      this.homeModel.allListBook = this.homeModel.allListBook.filter((book: { bookTitle: string; }) => {
        return book.bookTitle.toLowerCase().includes(this.enteredSearchValue.toLowerCase());
      });
    } this.onSearch = true;
    this.hide = false;

  }
  
  constructor(
    private readonly router: Router,
    private readonly bookService: BookService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.bookService.getListBookPartly().subscribe(
      (response) => {
        this.homeModel.allListBook = response.data;
        this.book = this.homeModel.allListBook;
        let index = this.bookService.getIndex()
        this.books = response.data[index]
        this.homeModel.author = response.data.authorOfBook;
      }
    )
  }

  changeSize(event: any){
    this.p = 1
  }

  countView() {
   
  }

  goToDetailBook() {
    this.book.bookId;
    this.router.navigate([`detail-book/${this.book.bookId}`]).then(() => {
      window.location.reload();
    });
  }

  goToHome() {
    this.router.navigate([""]);
  }

  goToLibrary() {
    this.router.navigate(["our-library"]);
    window.location.reload();
  }
}