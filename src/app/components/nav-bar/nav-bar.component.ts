import { Component } from '@angular/core';
import {Router, Scroll} from "@angular/router";
import {filter} from "rxjs";

export type TRouteUrl = 'students' | 'groups';

interface IMenuItem {
  title: string;
  url: TRouteUrl;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public activeItemIndex = 0;

  readonly menu: IMenuItem[] = [
    {title: 'Группы', url: 'groups'},
    {title: 'Студенты', url: 'students'},
  ]

  constructor(
    private router: Router,
  ) {
    this.routeToPage(this.menu[this.activeItemIndex].url)

    this.router.events
      .pipe(
        filter((event) => event instanceof Scroll),
      )
      .subscribe((event) => {
        if (event instanceof Scroll) {
          const relativeUrl: string = event.routerEvent.urlAfterRedirects.split('/')[1];
          this.activeItemIndex = this.menu.findIndex((item: IMenuItem) => item.url === relativeUrl)
        }
      });
  }

  public routeToPage(url: TRouteUrl): void {
    this.router.navigate([url]).then();
  }

}
