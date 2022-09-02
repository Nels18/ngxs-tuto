import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user/pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
