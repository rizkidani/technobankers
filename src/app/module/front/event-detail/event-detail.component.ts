import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventDetailModel } from 'src/app/model/event-detail.model';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  detailModel = new EventDetailModel();
  eventId = "";
  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private readonly eventService: EventService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let eventId = data.params.id;
      this.eventId = eventId;

      this.eventService.getDetailEvent(eventId).subscribe(
        (response: any) => {
          this.detailModel.eventDetail = response.data;
      })
    })
  }
}
