import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UserService],
})
export class UserModule { }
