import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManageExpensesComponent } from './manage-expenses/manage-expenses.component';
import { ReportsComponent } from './reports/reports.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './effects/user.effects';
@NgModule({
  declarations: [
    AppComponent, HomeComponent, UserSignupComponent, UserConfirmationComponent,
    UserDashboardComponent, ManageExpensesComponent, ReportsComponent, NotFoundComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    StoreModule.forRoot({ appState: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
