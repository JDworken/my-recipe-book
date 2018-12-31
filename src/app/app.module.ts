import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// App Modules
import { AppRoutingModule } from './app-routing.module';

// Top Level Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestNavComponent } from './test-nav/test-nav.component';

// Global Services
import { NavHelperService } from "./shared/nav/nav-helper.service";
import { DrawerService } from "./shared/drawer/drawer.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NavHelperService,
    DrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
