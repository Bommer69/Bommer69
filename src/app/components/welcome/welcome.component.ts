import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  fullName: string = '';
  authorName: string = '';
  posts: any[] = [];
  newPostContent: string = '';
  newPostImage: string | null = null; // Thêm thuộc tính lưu ảnh
  avatar: string | null = null; // Thêm thuộc tính lưu ảnh đại diện

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {
    this.route.queryParams.subscribe(params => {
      this.fullName = params['fullName'] || 'Vinh';
      this.authorName = this.fullName.split(' ').slice(-1).join(''); // Extract last name
    });
    // Lấy avatar từ localStorage nếu có
    if (isPlatformBrowser(this.platformId)) {
      const storedAvatar = localStorage.getItem('avatar');
      if (storedAvatar) {
        this.avatar = storedAvatar;
      }
    }
  }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Lấy bài viết từ localStorage nếu có, nếu không thì dùng mẫu
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
        this.posts = JSON.parse(storedPosts).map((post: any) => ({
          ...post,
          timestamp: new Date(post.timestamp),
          showComments: false,
          newComment: ''
        }));
      } else {
        this.posts = [
          {
            author: 'Nguyễn Văn Thoai',
            content: 'Chào mừng bạn đến với mạng xã hội Angular!',
            timestamp: new Date(Date.now() - 1000 * 60 * 60),
            likes: 2,
            comments: [
              { author: 'Trần Thị LanLan', content: 'Hay quá!' }
            ],
            showComments: false,
            newComment: '',
            authorAvatar: null // Thêm trường avatar cho mẫu
          },
          {
            author: 'Lê Thị Anh',
            content: 'Hôm nay trời đẹp quá mọi người nhỉ?',
            timestamp: new Date(Date.now() - 1000 * 60 * 30),
            likes: 1,
            comments: [],
            showComments: false,
            newComment: '',
            authorAvatar: null
          }
        ];
        localStorage.setItem('posts', JSON.stringify(this.posts));
      }
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newPostImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onAvatarSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatar = e.target.result;
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('avatar', this.avatar!);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async addPost() {
    if (this.newPostContent.trim() || this.newPostImage) {
      try {
        const newPost = {
          author: this.fullName || 'Dynamic User', // Lấy tên người dùng nếu có
          content: this.newPostContent,
          image: this.newPostImage, // Lưu ảnh vào bài viết
          timestamp: new Date(),
          likes: 0,
          comments: [],
          showComments: false,
          newComment: '',
          authorAvatar: this.avatar // Lưu avatar của author vào post
        };
        this.posts.unshift(newPost);
        // Lưu lại vào localStorage
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('posts', JSON.stringify(this.posts));
        }
        this.newPostContent = '';
        this.newPostImage = null;
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  }

  likePost(post: any) {
    post.likes++;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
    const button = document.querySelector(`.post-actions button[data-post-id="${post.timestamp.getTime()}"]`);
    if (button) {
      button.classList.add('liked');
    }
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (post.newComment && post.newComment.trim()) {
      post.comments.push({
        author: this.fullName || 'Người dùng',
        content: post.newComment
      });
      post.newComment = '';
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('posts', JSON.stringify(this.posts));
      }
    }
  }

  sharePost(post: any) {
    alert(`Bạn đã chia sẻ bài viết: "${post.content}"`);
  }
}
