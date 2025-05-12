import { Injectable } from '@angular/core';
import { users, User } from '../data/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Register a new user
  registerUser(email: string, password: string, fullName: string): boolean {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return false; // User already exists
    }
    users.push({ email, password, fullName });
    return true;
  }

  // Validate login credentials
  validateUser(email: string, password: string): boolean {
    return users.some(user => user.email === email && user.password === password);
  }

  // Validate user by full name
  validateUserByFullName(fullName: string, password: string): boolean {
    return users.some(user => user.fullName === fullName && user.password === password);
  }

  // Get user by email
  getUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
  }
}