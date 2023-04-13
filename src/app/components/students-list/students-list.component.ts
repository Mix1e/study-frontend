import { Component } from '@angular/core';
import { IStudent } from '../../api/models/student.interface';
import { StudentsService } from '../../api';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./../../common/styles/list-page.scss', "./../../common/styles/table.scss"],
})
export class StudentsListComponent {
    public readonly columns: string[] = ['name', 'birthdate', 'number', 'actions'];
    public students$: Observable<IStudent[]>;
    constructor(private studentsService: StudentsService) {
        this.students$ = this.studentsService.findAll();
    }

    public remove(item: IStudent): void {

    }
}
