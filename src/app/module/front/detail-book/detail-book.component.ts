import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailBookModel } from './model/detail-book.model';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import 'flowbite';

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
  // Series: any;

  toggleLoading = () => {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  };

  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private readonly bookService: BookService,
  ) {}

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
      let id = data.params.id,
        params = {
          bookId: id,
        }
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

  goToLibrary() {
    this.router.navigate(["our-library"]);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.detailModel.formGroupEmail.controls;
  }

}
