import { IStudent } from './student.interface';

export interface IGroup {
    id: number;
    name: string;
    students: IStudent[];
}

export interface ICreateGroupRequest {
  name: string;
}
