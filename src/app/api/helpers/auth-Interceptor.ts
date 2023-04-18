import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {UserContextService} from "../../common/services/user-context.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private userContextService: UserContextService,
  ) {}

  public get token(): string {
    return this.userContextService.getAuthToken();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.append('Authorization', 'Basic ' + this.token),
    })

    return next.handle(authReq).pipe(
      tap(
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401)
              console.log('Unauthorized')
          }
        }
      )
    )
  }
}
