import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

// App Modules
import { AppRoutingModule } from './app-routing.module';

// Top Level Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestNavComponent } from './test-nav/test-nav.component';

// Global Services
import { NavHelperService } from "./shared/nav/nav-helper.service";
import { DrawerService } from "./shared/drawer/drawer.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestNavComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule
  ],
  providers: [
    NavHelperService,
    DrawerService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
