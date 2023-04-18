import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Observer, take} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";
import {ICreateStudentRequest, IStudent} from "../../../api/models/student.interface";
import {StudentsService} from "../../../api";
import {HttpErrorResponse} from "@angular/common/http";
import {GroupsService} from "../../../api/services/groups.service";
import {ICreateGroupRequest, IGroup} from "../../../api/models/group.interface";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./../../../common/styles/modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupComponent {
  @Input() modal!: Observer<void>;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>();
  public formData: FormGroup = CreateGroupComponent.newForm();

  constructor(
    private groupsService: GroupsService,
  ) {
  }

  public onClose(): void {
    this.modal.complete();
  }

  public onSubmit(): void {
    const createGroupRequest: ICreateGroupRequest = this.formData.value;
    this.groupsService.create(createGroupRequest).pipe(take(1)).subscribe({
      next: (response: IGroup) => this.reload.emit(),
      error: (err: HttpErrorResponse) => console.log(err.error),
      complete: () => this.onClose(),
    }
    )
  }

  public static newForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }
}
