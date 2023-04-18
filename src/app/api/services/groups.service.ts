import {Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable, take} from 'rxjs';
import {ICreateGroupRequest, IGroup} from "../models/group.interface";
import {ICreateStudentRequest, IStudent} from "../models/student.interface";

@Injectable()
export class GroupsService extends ApiBaseService {
  override path = '/groups'

  public findAll<R = IGroup[]>(): Observable<R> {
    return this.httpClient.get<R>(this.controller);
  }

  public create<R = IGroup>(groupRequest: ICreateGroupRequest): Observable<R | never> {
    return this.httpClient.post<R>(`${this.controller}/create`, groupRequest);
  }

  public addStudent<R = IStudent>(groupId: number, createStudentRequest: ICreateStudentRequest): Observable<R | never> {
    return this.httpClient.post<R>(`${this.controller}/${groupId}/students`, createStudentRequest);
  }

  public update<R = IGroup>(group: IGroup): Observable<R | never> {
    return this.httpClient.put<R>(`${this.controller}/update`, group);
  }

  public delete(id: number): Observable<unknown> {
    return this.httpClient.delete(`${this.controller}/delete/${id}`);
  }
}
