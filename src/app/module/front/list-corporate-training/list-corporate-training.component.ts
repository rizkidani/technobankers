import { Component } from '@angular/core';
import { TrainingCorporateService } from 'src/app/services/training/training-corporate.service';

@Component({
  selector: 'app-list-corporate-training',
  templateUrl: './list-corporate-training.component.html',
  styleUrls: ['./list-corporate-training.component.scss']
})
export class ListCorporateTrainingComponent {
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
