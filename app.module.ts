import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapComponent } from './map/map.component';
import { SummaryButtonComponent } from './summary-button/summary-button.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileService } from './profile.service';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    MapComponent,
    SummaryButtonComponent,
    AdminPanelComponent,
    ProfileDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProfileService , LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
