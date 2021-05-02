import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() stars: number;
  counter(i: number) {
    return new Array(i);
  }
}
