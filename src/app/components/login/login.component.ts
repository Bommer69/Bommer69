import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Thêm dòng này

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Thêm dòng này
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authService.validateUser(email, password)) {
        this.router.navigate(['/welcome'], { queryParams: { fullName: this.getFullNameByEmail(email) } });
      } else {
        this.errorMessage = 'Email hoặc mật khẩu không chính xác.';
      }
    }
  }

  // Lấy fullName từ email để truyền sang welcome (nếu cần)
  getFullNameByEmail(email: string): string {
    // users là import từ user-data, nhưng ở đây không có, nên dùng authService
    const user = (this.authService as any).users?.find?.((u: any) => u.email === email)
      || (window as any).users?.find?.((u: any) => u.email === email);
    return user?.fullName || '';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password1');
  }
}
