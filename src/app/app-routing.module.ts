import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { ByMonthViewComponent } from './by-month-view/by-month-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'addUser', component: AddUserComponent
  },
  {
    path: 'byMonthView', component: ByMonthViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
