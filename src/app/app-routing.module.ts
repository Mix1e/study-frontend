import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';

const routes: Routes = [
    { path: 'students', component: StudentsListComponent },
    { path: 'groups', component: GroupsListComponent },
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: '**', redirectTo: 'students', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
