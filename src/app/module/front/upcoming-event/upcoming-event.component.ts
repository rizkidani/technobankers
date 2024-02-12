import { Component } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import 'flowbite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit():void{
    
  }

  routerToEventDetail() {
    this.router.navigate(['event/detail/1'])
  }

}
