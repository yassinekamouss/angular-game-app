import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfComponent } from './components/prof/prof.component';
import { DashboardComponent } from './components/prof/dashboard/dashboard.component';
import { TestsComponent } from './components/prof/tests/tests.component';
import { SettingsComponent } from './components/prof/settings/settings.component';
import {AdminComponent} from './components/admin/admin.component';
import {ParentsComponent} from './components/admin/parents/parents.component';
import {RapportsComponent} from './components/admin/rapports/rapports.component';
import {AdminDashboardComponent} from './components/admin/dashboard/dashboard.component';
import { StudentsComponent } from './components/prof/students/students.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'reset-password', component: ResetPasswordComponent},
    {
        path: 'prof',
        component: ProfComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent},
            { path: 'students', component: StudentsComponent},
            { path: 'tests', component: TestsComponent},
            { path: 'settings', component: SettingsComponent}
        ]
    },
  {path: 'admin',
    component: AdminComponent,
    data: { roles: ['administrator', 'principal'] },
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path:'dashboard' , component: AdminDashboardComponent},
      {path: 'parents', component: ParentsComponent},
      {path: 'reports', component: RapportsComponent}
    ]
  }
];
