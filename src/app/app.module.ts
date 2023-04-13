import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import {TuiIslandModule, TuiTagModule} from '@taiga-ui/kit';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";

@NgModule({
    declarations: [AppComponent, StudentsListComponent, GroupsListComponent],
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
  ],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
