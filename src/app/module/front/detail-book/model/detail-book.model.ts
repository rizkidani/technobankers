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

    
    formGroupRating = new FormGroup({
        bookId: new FormControl(""),
        bookReviewName: new FormControl(""),
        bookReviewEmail: new FormControl(""),
        bookReviewRating: new FormControl(0),
        bookReviewText: new FormControl("")
    });

    formBuyBook = new FormGroup({
        bookId: new FormControl(""),
        userId: new FormControl(""),
        bookQuantity: new FormControl(""),
    });
}