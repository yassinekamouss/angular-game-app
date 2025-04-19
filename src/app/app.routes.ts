import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuard } from './guards/auth.guard';
import { UserManagementComponent} from './components/user/user-management/user-management.component';
import { RoleGuard} from './guards/role/role.guard';
import { ProfComponent } from './components/prof/prof.component';
import { DashboardComponent } from './components/prof/dashboard/dashboard.component';
import { ClassesComponent } from './components/shared/classes/classes.component';
import { TestsComponent } from './components/prof/tests/tests.component';
import { SettingsComponent } from './components/prof/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'reset-password', component: ResetPasswordComponent},
    {
      path: 'admin/users',
      component: UserManagementComponent,
      canActivate: [AuthGuard, RoleGuard],
      data: { roles: ['administrator', 'principal'] }
    },
    { path: 'reset-password', component: ResetPasswordComponent},
    { 
        path: 'prof', 
        component: ProfComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent},
            { path: 'classes', component: ClassesComponent},
            { path: 'tests', component: TestsComponent},
            { path: 'settings', component: SettingsComponent}
        ]
    }
];
