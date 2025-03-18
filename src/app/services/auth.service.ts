import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) { }

  async register(email: string, password: string, fullName: string) {
    try {
      // Kiểm tra email đã tồn tại chưa
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      
      // Lưu thông tin người dùng vào Firestore
      await setDoc(doc(this.firestore, 'users', userCredential.user.uid), {
        fullName,
        email,
        createdAt: new Date()
      });

      return userCredential.user;
    } catch (error: any) {
      let errorMessage = 'Đã xảy ra lỗi khi đăng ký.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email này đã được sử dụng.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email không hợp lệ.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Đăng ký bằng email/password không được bật.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Mật khẩu quá yếu.';
          break;
        default:
          errorMessage = error.message;
      }
      
      throw new Error(errorMessage);
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      let errorMessage = 'Đã xảy ra lỗi khi đăng nhập.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email không hợp lệ.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Tài khoản đã bị vô hiệu hóa.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Không tìm thấy tài khoản với email này.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Mật khẩu không chính xác.';
          break;
        default:
          errorMessage = error.message;
      }
      
      throw new Error(errorMessage);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error: any) {
      throw new Error('Đã xảy ra lỗi khi đăng xuất.');
    }
  }

  async getCurrentUser() {
    return this.auth.currentUser;
  }

  async getUserProfile(uid: string) {
    try {
      const userDoc = await getDoc(doc(this.firestore, 'users', uid));
      if (userDoc.exists()) {
        return userDoc.data();
      }
      return null;
    } catch (error) {
      throw new Error('Không thể lấy thông tin người dùng.');
    }
  }
} 