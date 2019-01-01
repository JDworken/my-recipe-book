import { Injectable } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { getRootView } from 'tns-core-modules/application/application';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  constructor() { }

  public show() {
    const sideDrawer = <RadSideDrawer>getRootView();
    sideDrawer.showDrawer();
  }

  public hide() {
    const sideDrawer = <RadSideDrawer>getRootView();
    sideDrawer.closeDrawer();
  }
}
