import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { APP_ROUTES } from './app.routing';
import { TimepickerModule, ModalModule, PopoverModule, CollapseModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { httpFactory } from './services/interceptor';

import { AppComponent } from './app.component';
import { CoreCacheService } from './services/core-cache.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard';
import { AuthService } from './services/auth.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { EventService } from './event/event.service';
import { SessionService } from './services/session.service';
import { NgbDateNativeAdapter } from './shared/datepicker-adapter.component';
import { SearchFilterPipe } from './shared/search.pipe';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AgmCoreModule } from '@agm/core';
import { UserService } from './user/user.service';
import { LocationInput } from './shared/location-input/location-input.component';
import { GroupService } from './group/group.service';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { MemberFormComponent } from './user/member/member.component';
import { GroupSelectForm } from './group/group-select-form/group-select-form.component';
import { GoogleEventsService } from './event/google-event.service';
import { GroupComponent } from './group/group/group.component';
import { GroupsComponent } from './group/groups.component';
import { PermissionService } from './services/permission.service';
import { GroupMemberService } from './group/group-member.service';
import { RecommendedComponent } from './group/recommended/recommended.component';
import { RecommendedService } from './group/recommended/recommended.service';
import { UpcomingFilter } from './shared/upcoming.pipe';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditEventComponent,
    SearchFilterPipe,
    UpcomingFilter,
    NotFoundComponent,
    LocationInput,
    CreateGroupComponent,
    MemberFormComponent,
    GroupSelectForm,
    GroupComponent,
    GroupsComponent,
    RecommendedComponent
  ],
  imports: [
    NgbModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDUJitlzdDW3SpdwzBzDW5YnTS_I-HeMCs",
      libraries: ["places"]
    }),
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoreCacheService,
    AuthGuard,
    AuthService,
    EventService,
    SessionService,
    UserService,
    GroupService,
    GoogleEventsService,
    PermissionService,
    GroupMemberService,
    RecommendedService,
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
