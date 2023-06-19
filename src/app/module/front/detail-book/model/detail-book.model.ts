import { FormControl, FormGroup, Validators } from "@angular/forms";

export class DetailBookModel {
    
    singleBook: any;
    previewImage: any;
    allDataImage: any = [];
    authorOfBook:any = {};
    roles:any = {}
    keywordOfBook:any = {};
    previewsOfBook:any;
    author : any = [];

    formGroupEmail = new FormGroup({
        bookId: new FormControl(""),
        clientName: new FormControl("", [Validators.required]),
        clientEmail: new FormControl("", [Validators.required, Validators.email]),
        clientNumber: new FormControl("")
    });
}