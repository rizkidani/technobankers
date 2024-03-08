import { Component } from '@angular/core';

@Component({
  selector: 'app-register-expired',
  templateUrl: './register-expired.component.html',
  styleUrls: ['./register-expired.component.scss']
})
export class RegisterExpiredComponent {

  refreshPage() {
    window.location.reload()
  }

}
