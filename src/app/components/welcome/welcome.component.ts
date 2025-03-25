import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  posts: { author: string; content: string; timestamp: Date }[] = [];
  newPostContent: string = '';

  addPost() {
    if (this.newPostContent.trim()) {
      this.posts.unshift({
        author: 'Người dùng', // Replace with dynamic user data if available
        content: this.newPostContent,
        timestamp: new Date()
      });
      this.newPostContent = '';
    }
  }
}
