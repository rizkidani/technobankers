import { FormControl, FormGroup, Validators } from "@angular/forms";

export class BookModel {
    formBookShipping = new FormGroup({
        bookReceiptName: new FormControl("", [Validators.required]),
        bookReceiptPhone: new FormControl("", [Validators.required]),
        bookReceiptEmail: new FormControl("", [Validators.required, Validators.email]),
        bookShippingLabel: new FormControl("", [Validators.required]),
        bookShippingAddress: new FormControl("", [Validators.required]),
        bookShippingCountry: new FormControl("", [Validators.required]),
        bookShippingProvince: new FormControl("", [Validators.required]),
        bookShippingCity: new FormControl("", [Validators.required]),
        bookShippingSubdistrict: new FormControl("", [Validators.required]),
        bookShippingVillage: new FormControl("", [Validators.required]),
        bookShippingPostalcode: new FormControl("", [Validators.required])
    });
}