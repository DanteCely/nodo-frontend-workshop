import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    InfoComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
