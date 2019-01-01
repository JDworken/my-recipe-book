import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestNavComponent } from './test-nav/test-nav.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'test',
      component: TestNavComponent
  }
];
