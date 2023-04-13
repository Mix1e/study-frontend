import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student.interface';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class StudentsService extends ApiBaseService {
    override path = '/students';

    public findAll<R = IStudent[]>(): Observable<R> {
        return this.httpClient.get<R>(this.controller, { headers: this.headers });
    }
}
