import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
// import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
// import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

// Service Imports
import { DrawerService } from "./shared/drawer/drawer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(private _changeDetectionRef: ChangeDetectorRef, 
    private drawerServ: DrawerService){
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._changeDetectionRef.detectChanges();
  }
  
  public openDrawer() {
    this.drawerServ.show();
  }

  public onCloseDrawerTap() {
      this.drawerServ.hide();
  }
}
