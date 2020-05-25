import { EventService } from './../events/shared/event.service';
import { ISession } from './../events/shared/event.model';
import {Component} from '@angular/core';
import { AuthService } from './../user/auth.service';


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font size: 10px;}
    #searchForm {margin-right: 80px;}
    @media (max-width: 1200px){#searchForm{display: }}
    li > a.active { color: #F97924; }
    ` ]
})
export class NavBarComponent {
  searchTerm: string ="";
  foundSessions: ISession[];
  constructor(public auth:AuthService, private eventService: EventService){
  }
 
  
  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions => { 
      this.foundSessions = sessions;

    })
  }
}
