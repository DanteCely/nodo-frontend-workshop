import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'configuration', component: ConfigComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
