import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { ToastrService } from 'ngx-toastr';
import { DetailBookModel } from 'src/app/module/front/detail-book/model/detail-book.model';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss']
})
export class LeaveReviewComponent {
  
  detailModel = new DetailBookModel();
  @Input() maxRating: number = 5;
  currentRating: number = 0;
  stars: number[] = [];
  
  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly bookService: BookService,
    private toastr: ToastrService,
  ) {
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  rate(star: number): void {
    this.currentRating = star;
    this.detailModel.formGroupRating.controls['bookReviewRating'].setValue(this.currentRating); // Mengatur nilai FormControl sesuai dengan bintang yang diklik
  }

  submitRating() {
  this.activatedRoute.paramMap.subscribe((data: any ) => {
    let id = data.params.id
      this.detailModel.formGroupRating.controls['bookId'].setValue(id);
      this.bookService.addReview(this.detailModel.formGroupRating.value).subscribe(
        (response) => {
          this.router.navigate([`detail-book/${id}`])
          .then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500); // Menunggu 500ms sebelum me-refresh halaman
          });
        },
        (error) => {
        }
        )
      })
    }
}
