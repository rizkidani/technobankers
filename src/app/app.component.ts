import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'technobanker';
  isTrainingExpanded = false;

  onActivate(_event: any) {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    initFlowbite();
  }

  toggleTraining() {
    this.isTrainingExpanded = !this.isTrainingExpanded;
  }
}
