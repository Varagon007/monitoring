import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'monitoring',
    component: MonitoringComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
