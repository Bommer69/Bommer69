import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; // Biểu mẫu đăng nhập
  errorMessage: string = ''; // Thông báo lỗi

  constructor(
    private fb: FormBuilder, // Dùng để tạo biểu mẫu
    private router: Router // Điều hướng giữa các trang
  ) {
    // Khởi tạo biểu mẫu với các trường email và mật khẩu
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Xử lý khi người dùng nhấn nút đăng nhập
  onSubmit() {
    if (this.loginForm.valid) {
      // Xử lý logic đăng nhập (không dùng Firebase)
      this.router.navigate(['/welcome']);
    }
  }

  // Truy cập trường email trong biểu mẫu
  get email() {
    return this.loginForm.get('email');
  }

  // Truy cập trường mật khẩu trong biểu mẫu
  get password() {
    return this.loginForm.get('password');
  }
}
