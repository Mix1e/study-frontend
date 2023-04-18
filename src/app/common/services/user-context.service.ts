import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  private userName: string = 'admin';
  private password: string = 'password';
  constructor() { }

  public getAuthToken(): string {
    return btoa(unescape(encodeURIComponent(this.userName + ':' + this.password)));
  }
}
