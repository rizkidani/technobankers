import { Component } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import 'flowbite';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home/home-service.service';
import { HomeModel } from './model/home.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeModel = new HomeModel();
  dataSlider: any = {};

  constructor(
    private readonly router: Router,
    private readonly homeService: HomeServiceService,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {

    this.homeService.getSlider().subscribe(
      (response) => {
        this.homeModel.allDataSlider = response.data;
      });

    this.bookService.getListBook().subscribe(
      (response) => {
        this.homeModel.allListBook = response.data;
      });

    }

  goToOurLibrary() {
    this.router.navigate(["our-library"]);
  }

}
