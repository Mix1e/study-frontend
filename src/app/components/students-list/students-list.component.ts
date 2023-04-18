import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IStudent} from '../../api/models/student.interface';
import {StudentsService} from '../../api';
import {Observable, Subject, take} from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./../../common/styles/list-page.scss', "./../../common/styles/table.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsListComponent {
  public readonly columns: string[] = ['name', 'birthdate', 'number', 'actions'];
  public students$: Observable<IStudent[]>;
  public isUpdateModalOpen: boolean = false;
  public chosenStudent!: IStudent;
  public isCreateModalOpen: boolean = false;
  public reload$: Subject<void> = new Subject<void>();

  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.findAll();

    this.reload$.subscribe(
      () => this.students$ = this.studentsService.findAll(),
    )
  }

  public reload(): void {
    this.reload$.next();
  }

  public create(): void {
    this.isCreateModalOpen = true;
  }

  public update(item: IStudent): void {
    this.chosenStudent = item;
    this.isUpdateModalOpen = true;
  }

  public remove(item: IStudent): void {
    this.studentsService.delete(item.id).pipe(take(1)).subscribe(
      () => this.reload(),
    );
  }
}
