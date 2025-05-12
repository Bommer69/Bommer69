import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Thêm dòng này

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup; // Biểu mẫu đăng ký
  errorMessage: string = ''; // Thông báo lỗi

  constructor(
    private fb: FormBuilder, // Dùng để tạo biểu mẫu
    private router: Router, // Điều hướng giữa các trang
    private authService: AuthService // Thêm dòng này
  ) {
    // Khởi tạo biểu mẫu với các trường cần thiết
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      author: [''] // Cho phép nhập author
    }, {
      validators: this.passwordMatchValidator // Kiểm tra mật khẩu khớp
    });
  }

  // Hàm kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // Xử lý khi người dùng nhấn nút đăng ký
  async onSubmit() {
    if (this.registerForm.valid) {
      const { email, password, fullName } = this.registerForm.value;
      // Gán author = fullName trước khi gửi đi
      this.registerForm.patchValue({ author: fullName });
      try {
        const success = this.authService.registerUser(email, password, fullName);
        if (success) {
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = 'Email đã tồn tại. Vui lòng dùng email khác.';
        }
      } catch (error) {
        this.errorMessage = 'Đăng ký thất bại. Vui lòng thử lại.';
      }
    }
  }

  // Truy cập các trường trong biểu mẫu
  get fullName() {
    return this.registerForm.get('fullName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get author() {
    return this.registerForm.get('author');
  }
}
