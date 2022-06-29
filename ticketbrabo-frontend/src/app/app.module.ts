import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CanActivateRouteGuard } from './shared/services/can-activate-route.guard';
import { AuthenticationService } from './shared/services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    CanActivateRouteGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
