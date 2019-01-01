import { Component, OnInit } from '@angular/core';
import { NavHelperService } from '../shared/nav/nav-helper.service';
import { DrawerService } from '../shared/drawer/drawer.service';


@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrls: ['./test-nav.component.css']
})
export class TestNavComponent implements OnInit {

  constructor(private navHelperServ: NavHelperService, private drawerServ: DrawerService) { }

  ngOnInit() {
  }

  onNavBtnTap() {
    this.navHelperServ.back();
  }
}
