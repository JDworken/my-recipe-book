import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavHelperService {

  constructor(private routerExtension: RouterExtensions) { }

  public back(){
    this.routerExtension.backToPreviousPage();
  }
}
