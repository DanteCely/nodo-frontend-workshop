import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [InfoComponent, LoginComponent, MainComponent, ConfigComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class PagesModule {}
