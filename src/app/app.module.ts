import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Globals } from './global';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard,LoginGuard } from './authguard.service';
import { SignupComponent } from './signup/signup.component';
import { OldtasksComponent } from './oldtasks/oldtasks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SharedataService } from './sharedata.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SearchComponent } from './search/search.component';
const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent,canActivate: [LoginGuard] },
  { path: 'forgotPassword', component: ForgotpasswordComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'oldtasks', component: OldtasksComponent, canActivate: [AuthGuard]}, // , canActivate: [AuthGuard]
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard]}, // , canActivate: [AuthGuard]
  { path: 'changePassword', component: ChangepasswordComponent, canActivate: [AuthGuard]},
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SignupComponent,
    DatepickerComponent,
    OldtasksComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    AnalyticsComponent,
    SearchComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [Globals,AuthGuard,LoginGuard,SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
