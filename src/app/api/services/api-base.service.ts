import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiBaseService {
    protected readonly path: string = '';
    protected userName: string = 'admin';
    protected password: string = 'password';
    protected headers: HttpHeaders = new HttpHeaders().append(
      'Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(this.userName + ':' + this.password)))
    )

    constructor(protected httpClient: HttpClient) {}

    protected get controller(): string {
        return environment.apiSourceUrl + this.path;
    }
}
