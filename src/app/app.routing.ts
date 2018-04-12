import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';
 
const appRoutes : Routes =
  [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthguardService]
    },
    {
      path: 'register',
      component: RegisterComponent,
    }
  ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);