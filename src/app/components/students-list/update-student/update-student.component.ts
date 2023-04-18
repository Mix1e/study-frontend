import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observer, take} from "rxjs";
import {ICreateStudentRequest, IStudent} from "../../../api/models/student.interface";
import {FormGroup} from "@angular/forms";
import {StudentsService} from "../../../api";
import {CreateStudentComponent} from "../create-student/create-student.component";
import {HttpErrorResponse} from "@angular/common/http";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./../../../common/styles/modal.scss']
})
export class UpdateStudentComponent implements OnInit {
  @Input() modal!: Observer<void>;
  @Input() student!: IStudent;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>();
  public formData: FormGroup = CreateStudentComponent.newForm();

  constructor(
    private studentsService: StudentsService,
  ) {
  }

  public ngOnInit() {
    const date = this.student.birthdate;
    this.formData.patchValue({
      name: this.student.name,
      number: this.student.number,
      birthdate: new TuiDay(date.getFullYear(), date.getMonth(), date.getDay()),
    });
  }

  public onClose(): void {
    this.modal.complete();
  }

  public onSubmit(): void {
    const student: IStudent = {
      ...this.formData.value,
      id: this.student.id,
    };
    this.studentsService.update(student).pipe(
      take(1),
    ).subscribe({
      next: (response: IStudent) => this.reload.emit(),
      error: (err: HttpErrorResponse) => console.log(err.error),
      complete: () => this.onClose(),
      });
  }
}
