import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userProfile: any = null; // Thông tin người dùng
  errorMessage: string = ''; // Thông báo lỗi

  // Hàm khởi tạo khi component được tải
  ngOnInit() {
    // Khởi tạo không dùng Firebase
  }

  // Xử lý đăng xuất
  logout() {
    // Logic đăng xuất không dùng Firebase
  }
}
