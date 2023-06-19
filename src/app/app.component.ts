import { Component, ViewEncapsulation } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'technobanker';

  onActivate(_event: any) {
    window.scroll(0, 0);
  }
}
