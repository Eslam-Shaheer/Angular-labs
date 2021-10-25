import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: ViewprofileComponent,
    canActivate: [UserGuard],
  },
  { path: 'edit', component: EditprofileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/user/profile', pathMatch: 'full' },
];

@NgModule({
  declarations: [ViewprofileComponent, EditprofileComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
