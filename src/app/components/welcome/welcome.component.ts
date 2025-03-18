import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userProfile: any = null;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    try {
      const user = await this.authService.getCurrentUser();
      if (user) {
        this.userProfile = await this.authService.getUserProfile(user.uid);
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
