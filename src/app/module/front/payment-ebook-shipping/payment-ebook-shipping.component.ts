import { Component } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-ebook-shipping',
  templateUrl: './payment-ebook-shipping.component.html',
  styleUrls: ['./payment-ebook-shipping.component.scss']
})
export class PaymentEbookShippingComponent {
  bookModel = new BookModel;
  bookTransactionId: any;
  userData: any = {};
  shippingData: any;
  checkoutData: any;

  shippingCountry: any;
  selectedCountry: any;
  shippingProvince: any;
  selectedProvince: any;
  shippingCity: any;
  selectedCity: any;
  shippingDistrict: any;
  selectedDistrict: any;
  shippingSubDistrict: any;
  selectedSubDistrict: any;
  selectedTarifJNE: string = "";

  constructor(
    private readonly router: Router,
    public authService: AuthService,
    public bookService: BookService
  ){}

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    // get respons from local storage
    let bookTransactionId = localStorage.getItem('bookTransactionId');
    if (bookTransactionId) {
      this.bookTransactionId = JSON.parse(bookTransactionId);
    }

    this.bookService.getDetailBookTransaction(this.bookTransactionId).subscribe(
      (response) => {
        this.bookModel.formBookShipping.setValue({
          bookReceiptName: response.data.bookReceiptName, 
          bookReceiptPhone: response.data.bookReceiptPhone,
          bookReceiptEmail: response.data.bookReceiptEmail,
          bookShippingLabel: response.data.bookShippingLabel,
          bookShippingAddress: response.data.bookShippingAddress,
          bookShippingCountry: response.data.bookShippingCountry,
          bookShippingProvince: response.data.bookShippingProvince,
          bookShippingCity: response.data.bookShippingCity,
          bookShippingSubdistrict: response.data.bookShippingSubdistrict,
          bookShippingVillage: response.data.bookShippingVillage,
          bookShippingVillagePost: response.data.bookShippingVillage,
          bookShippingPostalcode: response.data.bookShippingPostalcode
        });

        if (this.selectedCountry == 'INDONESIA') {
          this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].setValidators([Validators.required]);
          this.bookModel.formBookShipping.controls['bookShippingVillage'].setValidators([Validators.required]);
          this.bookModel.formBookShipping.controls['bookShippingVillagePost'].setValidators([Validators.required]);
        } else {
          this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].clearValidators();
          this.bookModel.formBookShipping.controls['bookShippingVillage'].clearValidators();
          this.bookModel.formBookShipping.controls['bookShippingVillagePost'].clearValidators();
        }

        this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].updateValueAndValidity();
        this.bookModel.formBookShipping.controls['bookShippingVillage'].updateValueAndValidity();
        this.bookModel.formBookShipping.controls['bookShippingVillagePost'].updateValueAndValidity();
       },
      (error) => {
      }
    )

    this.bookService.getShippingAllCountries().subscribe(
      (response) => {
        this.shippingCountry = response;
        this.shippingCountry = this.shippingCountry.countries;
       },
      (error) => {
      }
    )
  }

  addShippingBook() {
    this.bookModel.formBookShipping.markAllAsTouched();
    if (this.bookModel.formBookShipping.valid) {

      this.bookService.checkOutBookShipping(this.bookTransactionId, this.selectedTarifJNE, this.bookModel.formBookShipping.value).subscribe(
        (response) => {
          // Simpan respons ke local storage
          localStorage.setItem('checkoutResponse', JSON.stringify(response));
          localStorage.setItem('tarifCodeJNELocal', JSON.stringify(this.selectedTarifJNE));
          this.router.navigate(["transaction-checkout"]);
          setTimeout(() => {
            window.location.reload();
          }, 500);
         },
        (error) => {
        }
      )
    } else {
      Swal.fire({
        title: "Form Shipping Required",
        text: "Please fill the form shipping.",
        icon: "info"
      });
    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.bookModel.formBookShipping.controls;
  }

  onChangeCountry(selected: string) {
    if (selected == 'INDONESIA') {
      this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].setValidators([Validators.required]);
      this.bookModel.formBookShipping.controls['bookShippingVillage'].setValidators([Validators.required]);
      this.bookModel.formBookShipping.controls['bookShippingVillagePost'].setValidators([Validators.required]);

      this.bookService.getShippingProvince().subscribe(
        (response) => {
          this.shippingProvince = response;
          this.shippingProvince = this.shippingProvince.data;
         },
        (error) => {
        }
      )

    } else {
      this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].clearValidators();
      this.bookModel.formBookShipping.controls['bookShippingVillage'].clearValidators();
      this.bookModel.formBookShipping.controls['bookShippingVillagePost'].clearValidators();
    }
    this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].updateValueAndValidity();
    this.bookModel.formBookShipping.controls['bookShippingVillage'].updateValueAndValidity();
    this.bookModel.formBookShipping.controls['bookShippingVillagePost'].updateValueAndValidity();

    this.bookModel.formBookShipping.controls['bookShippingProvince'].setValue("");
    this.bookModel.formBookShipping.controls['bookShippingCity'].setValue("");
    this.bookModel.formBookShipping.controls['bookShippingSubdistrict'].setValue("");
    this.bookModel.formBookShipping.controls['bookShippingVillage'].setValue("");
    this.bookModel.formBookShipping.controls['bookShippingVillagePost'].setValue("");
    this.bookModel.formBookShipping.controls['bookShippingPostalcode'].setValue("");
  }

  onChangeProvince(selected: string) {
    if (this.selectedCountry == 'INDONESIA') {
      this.bookService.getShippingCity(selected).subscribe(
        (response) => {
          this.shippingCity = response;
          this.shippingCity = this.shippingCity.data;
         },
        (error) => {
        }
      )
    }
  }

  onChangeCity(selected: string) {
    if (this.selectedCountry == 'INDONESIA') {
      this.bookService.getShippingDistrict(this.selectedProvince, selected).subscribe(
        (response) => {
          this.shippingDistrict = response;
          this.shippingDistrict = this.shippingDistrict.data;
         },
        (error) => {
        }
      )
    }
  }

  onChangeDistrict(selected: string) {
    if (this.selectedCountry == 'INDONESIA') {
      this.bookService.getShippingSubDistrict(this.selectedProvince, this.selectedCity, selected).subscribe(
        (response) => {
          this.shippingSubDistrict = response;
          this.shippingSubDistrict = this.shippingSubDistrict.data;
         },
        (error) => {
        }
      )
    }
  }

  onChangeSubDistrict(selected: any) {
    if (this.selectedCountry == 'INDONESIA') {
      this.bookModel.formBookShipping.controls['bookShippingVillagePost'].setValue(selected.subDistrictName);
      this.bookModel.formBookShipping.controls['bookShippingPostalcode'].setValue(selected.zipCode);
      this.selectedTarifJNE = selected.tariffCode;
    }
  }

  logout() {
    this.authService.logOut()
  }

  goBack(): void {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

}
