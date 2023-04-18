export interface IStudent {
  id: number;
  name: string;
  birthdate: Date;
  number: number;
}

export interface ICreateStudentRequest {
  name: string;
  birthdate: Date;
  number: number;
}
