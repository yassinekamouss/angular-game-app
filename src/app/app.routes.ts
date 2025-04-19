import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuard } from './guards/auth.guard';
import {UserManagementComponent} from './components/user/user-management/user-management.component';
import {RoleGuard} from './guards/role/role.guard';
import {AdminComponent} from './components/admin/admin.component';
import {ParentsComponent} from './components/admin/parents/parents.component';
import {RapportsComponent} from './components/admin/rapports/rapports.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'reset-password', component: ResetPasswordComponent},
  {
    path: 'admin/users',
    component: UserManagementComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['administrator', 'principal'] }
  },
  {path: 'admin',
    component: AdminComponent,

    data: { roles: ['administrator', 'principal'] },
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path:'dashboard' , component: DashboardComponent},
      {path: 'parents', component: ParentsComponent},
      {path: 'reports', component: RapportsComponent}
    ]
  }
];
