import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Observer, take} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";
import {ICreateStudentRequest, IStudent} from "../../../api/models/student.interface";
import {StudentsService} from "../../../api";
import {HttpErrorResponse} from "@angular/common/http";
import {GroupsService} from "../../../api/services/groups.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./../../../common/styles/modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateStudentComponent {
  @Input() modal!: Observer<void>;
  @Input() groupId?: number;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>();
  public formData: FormGroup = CreateStudentComponent.newForm();

  constructor(
    private studentsService: StudentsService,
    private groupsService: GroupsService,
  ) {
  }

  public onClose(): void {
    this.modal.complete();
  }

  public onSubmit(): void {
    const student: ICreateStudentRequest = this.formData.value;

    if(!this.groupId) {
      this.studentsService.create(student).pipe(take(1)).subscribe({
          next: (response: IStudent) => this.reload.emit(),
          error: (err: HttpErrorResponse) => console.log(err.error),
          complete: () => this.onClose(),
        }
      )
    } else {
      this.groupsService.addStudent(this.groupId, student).pipe(take(1)).subscribe({
          next: (response: IStudent) => this.reload.emit(),
          error: (err: HttpErrorResponse) => console.log(err.error),
          complete: () => this.onClose(),
        }
      )
    }

  }

  public static newForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      birthdate: new FormControl(new TuiDay(2002, 0, 3), Validators.required),
      number: new FormControl(null, Validators.required),
    });
  }
}
