import { EventResolver } from './events/event-resolver.service';
//import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { DurationPipe } from './events/shared/duration.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,

  SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import { ToastrService}  from './common/toastr.service'
import {CollapsibleWellComponent}  from './common/collapsible-well.component'
import {appRoutes} from './routes'
import {JQ_TOKEN,SimpleModalComponent,ModalTriggerDirective} from './common/index';
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

let jQuery = window['$']
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
CollapsibleWellComponent,
SimpleModalComponent,
UpvoteComponent,
LocationValidator,
ModalTriggerDirective,
DurationPipe

  ],
  providers: [
    EventService, 
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not save this event, do you really want to cancel?')
  return true

}
