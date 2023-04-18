import { Component } from '@angular/core';
import {Observable, Subject, take} from "rxjs";
import {GroupsService} from "../../api/services/groups.service";
import {IGroup} from "../../api/models/group.interface";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./../../common/styles/list-page.scss', "./../../common/styles/table.scss"]
})
export class GroupsListComponent {
  public readonly columns: string[] = ['name', 'birthdate', 'number', 'actions'];
  public groups$!: Observable<IGroup[]>;
  public isUpdateModalOpen: boolean = false;
  public chosenGroup!: IGroup;
  public isCreateModalOpen: boolean = false;
  public isAddStudentModalOpen: boolean = false;
  public reload$: Subject<void> = new Subject<void>();

  constructor(private groupsService: GroupsService) {
    this.loadGroups();

    this.reload$.subscribe(
      () => this.loadGroups(),
    )
  }

  public reload(): void {
    this.reload$.next();
  }

  public create(): void {
    this.isCreateModalOpen = true;
  }

  public update(item: IGroup): void {
    this.chosenGroup = item;
    this.isUpdateModalOpen = true;
  }

  public remove(item: IGroup): void {
    this.groupsService.delete(item.id).pipe(take(1)).subscribe(
      () => this.reload(),
    );
  }

  public addStudent(item: IGroup): void {
    this.chosenGroup = item;
    this.isAddStudentModalOpen = true;
  }

  private loadGroups(): void {
    this.groups$ = this.groupsService.findAll();
  }
}
