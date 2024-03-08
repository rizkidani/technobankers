import { FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterModel {
    formGroupRegister = new FormGroup({
        userFirstName: new FormControl("", [Validators.required]),
        userLastName: new FormControl("", [Validators.required]),
        userEmail: new FormControl("", [Validators.required, Validators.email]),
        userPhone: new FormControl("", [Validators.required]),
        userPassword: new FormControl("", [Validators.required])
    });
}