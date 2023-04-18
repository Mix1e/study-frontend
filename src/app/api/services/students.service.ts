import {Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable, take} from 'rxjs';
import {ICreateStudentRequest, IStudent} from '../models/student.interface';
import {CreateStudentComponent} from "../../components/students-list/create-student/create-student.component";

@Injectable()
export class StudentsService extends ApiBaseService {
  override path = '/students'

  public findAll<R = IStudent[]>(): Observable<R | never> {
    return this.httpClient.get<R>(this.controller);
  }

  public create<R = IStudent>(student: ICreateStudentRequest): Observable<R | never> {
    return this.httpClient.post<R>(`${this.controller}/create`, student);
  }

  public update<R = IStudent>(student: IStudent): Observable<R | never> {
    return this.httpClient.put<R>(`${this.controller}/update`, student);
  }

  public delete(id: number): Observable<unknown> {
    return this.httpClient.delete(`${this.controller}/delete/${id}`);
  }
}
