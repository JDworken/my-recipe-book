import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrls: ['./test-nav.component.css']
})
export class TestNavComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions) { }

  ngOnInit() {
  }

  onNavBtnTap(){
    this.routerExtension.backToPreviousPage();
  }
}
