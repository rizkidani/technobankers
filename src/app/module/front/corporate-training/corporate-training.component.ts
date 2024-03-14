import { Component } from '@angular/core';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import 'flowbite';
import { TrainingCorporateService } from 'src/app/services/training/training-corporate.service';

@Component({
  selector: 'app-corporate-training',
  templateUrl: './corporate-training.component.html',
  styleUrls: ['./corporate-training.component.scss']
})
export class CorporateTrainingComponent {

  listTraining: any = []
  constructor(
    private trainingCorporateService: TrainingCorporateService
  ) {}

  ngOnInit(): void {
    this.trainingCorporateService.getListTrainingByStatus("Publish").subscribe(
      (response: any) => {
        this.listTraining = response.data;
      })
  }
}
