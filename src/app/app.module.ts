import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiSvgModule, TuiErrorModule, TuiFormatDatePipeModule
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import {
    TuiAccordionModule,
    TuiFieldErrorPipeModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiIslandModule,
    TuiTabsModule,
    TuiTagModule
} from '@taiga-ui/kit';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateStudentComponent } from './components/students-list/update-student/update-student.component';
import { CreateStudentComponent } from './components/students-list/create-student/create-student.component';
import {CreateGroupComponent} from "./components/groups-list/create-group/create-group.component";
import {UpdateGroupComponent} from "./components/groups-list/update-group/update-group.component";

@NgModule({
    declarations: [
      AppComponent, StudentsListComponent, GroupsListComponent, NavBarComponent, UpdateStudentComponent, CreateStudentComponent,
      CreateGroupComponent, UpdateGroupComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiIslandModule,
    TuiTagModule,
    TuiTableModule,
    TuiButtonModule,
    TuiLetModule,
    TuiSvgModule,
    TuiTabsModule,
    TuiInputCountModule,
    FormsModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputDateModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiAccordionModule,
    TuiFormatDatePipeModule,
  ],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
