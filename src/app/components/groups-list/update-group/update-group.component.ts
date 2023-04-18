import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observer, take} from "rxjs";
import {FormGroup} from "@angular/forms";
import {CreateGroupComponent} from "../create-group/create-group.component";
import {HttpErrorResponse} from "@angular/common/http";
import {IGroup} from "../../../api/models/group.interface";
import {GroupsService} from "../../../api/services/groups.service";

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./../../../common/styles/modal.scss']
})
export class UpdateGroupComponent implements OnInit {
  @Input() modal!: Observer<void>;
  @Input() group!: IGroup;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>();
  public formData: FormGroup = CreateGroupComponent.newForm();

  constructor(
    private groupsService: GroupsService,
  ) {
  }

  public ngOnInit() {
    this.formData.patchValue(this.group);
  }

  public onClose(): void {
    this.modal.complete();
  }

  public onSubmit(): void {
    const group: IGroup = {
      ...this.formData.value,
      id: this.group.id,
    };
    this.groupsService.update(group).pipe(
      take(1),
    ).subscribe({
      next: (response: IGroup) => this.reload.emit(),
      error: (err: HttpErrorResponse) => console.log(err.error),
      complete: () => this.onClose(),
      });
  }
}
