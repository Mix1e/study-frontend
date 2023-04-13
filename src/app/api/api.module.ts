import { NgModule } from '@angular/core';
import { StudentsService } from './services/students.service';

@NgModule({
    providers: [StudentsService],
})
export class ApiModule {}
