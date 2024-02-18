import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddjobComponent } from './dashboard/addjob/addjob.component';
import { ManagejobComponent } from './dashboard/managejob/managejob.component';
import { gardmGuard } from './gardm.guard';
import { QueryComponent } from './query/query.component';
import { guarduGuard } from './guardu.guard';

const routes: Routes = [
{
  path:"",
  redirectTo:"login",
  pathMatch:"full"
},
{ 
  path:"login",
  component:LoginComponent
},
{
  path:"dashboard",
  component:DashboardComponent,
  canActivate:[gardmGuard],
  children:[
    {
        path:"addjob",
        component:AddjobComponent
    },
    {
        path:"managejob",
        component:ManagejobComponent
    },
],

},
{
  path:"register",
  component:RegisterComponent
 },
{
  path:"query",
  component:QueryComponent,
  canActivate:[guarduGuard],
},
{
  path:"**",
  redirectTo:"login",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
