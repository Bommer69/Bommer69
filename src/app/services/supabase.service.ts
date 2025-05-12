import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);
  }

  // Example: Fetch data from a table
  async getData(table: string) {
    const { data, error } = await this.supabase.from(table).select('*');
    if (error) throw error;
    return data;
  }

  // Example: Insert data into a table
  async insertData(table: string, payload: any) {
    const { data, error } = await this.supabase.from(table).insert(payload);
    if (error) throw error;
    return data;
  }

  // Example: User authentication
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.user; // Access user from data object
  }


  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data.user; // Access user from data object
  }

  // Save user data to the database
  async saveUser(fullName: string, email: string) {
    const { data, error } = await this.supabase.from('usssers').insert({ fullName, email });
    if (error) throw error;
    return data;
  }

  // Validate user credentials
  async validateUser(email: string, password: string) {
    const { data, error } = await this.supabase
      .from('usssers')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();
    if (error) throw error;
    return data;
  }
}
