import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item.name }}</li>
    </ul>
  `,
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: any[] = []; // Dữ liệu hiển thị

  constructor(private dataService: DataService) {}

  // Lấy dữ liệu khi component được tải
  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
