import { NgModule } from '@angular/core';
import { StudentsService } from './services/students.service';
import {GroupsService} from "./services/groups.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./helpers/auth-Interceptor";

@NgModule({
    providers: [
      StudentsService,
      GroupsService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
    ],
})
export class ApiModule {}
