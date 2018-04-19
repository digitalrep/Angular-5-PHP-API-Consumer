import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';
 
const appRoutes : Routes =
  [
    { 
      path: '',
      component: HomeComponent
    },
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