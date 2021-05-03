import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = true;
  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
