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
  authorName: string = 'Thanh Thoai'; // Replace with dynamic user data if available
  posts: {
    author: string;
    content: string;
    timestamp: Date;
    likes: number;
    comments: { author: string; content: string }[];
    newComment: string;
    showComments: boolean;
  }[] = [
    {
      author: 'Thanh Thoai',
      content: 'Hôm nay trời đẹp quá!',
      timestamp: new Date(),
      likes: 5,
      comments: [
        { author: 'Thanh Thoai', content: 'Đúng vậy, thật tuyệt!' },
        { author: 'Thanh thaoi', content: 'Tôi cũng thấy thế.' }
      ],
      newComment: '',
      showComments: false
    },
    {
      author: 'Van Vinh',
      content: 'Vừa hoàn thành xong dự án mới, cảm giác thật tuyệt!',
      timestamp: new Date(),
      likes: 8,
      comments: [
        { author: 'Thanh Thoai ', content: 'Chúc mừng bạn nhé!' }
      ],
      newComment: '',
      showComments: false
    },
    {
      author: 'Thanh Thoai',
      content: 'Cam mom ',
      timestamp: new Date(),
      likes: 8,
      comments: [
        { author: 'Thanh Thoai ', content: 'Chúc mừng bạn nhé!' }
      ],
      newComment: '',
      showComments: false
    }
  ];
  newPostContent: string = '';

  addPost() {
    if (this.newPostContent.trim()) {
      this.posts.unshift({
        author: 'Thanh Thoai', // Replace with dynamic user data if available
        content: this.newPostContent,
        timestamp: new Date(),
        likes: 0,
        comments: [],
        newComment: '',
        showComments: false
      });
      this.newPostContent = '';
    }
  }

  likePost(post: any) {
    post.likes++;
    const button = document.querySelector(`.post-actions button[data-post-id="${post.timestamp.getTime()}"]`);
    if (button) {
      button.classList.add('liked');
    }
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (post.newComment.trim()) {
      post.comments.push({
        author: 'Người dùng', // Replace with dynamic user data if available
        content: post.newComment
      });
      post.newComment = '';
    }
  }

  sharePost(post: any) {
    alert(`Bạn đã chia sẻ bài viết: "${post.content}"`);
  }
}
