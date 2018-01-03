import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { LoginProvider } from '../../providers/login';

@NgModule({
  declarations: [ LoginPage ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HttpClientModule
  ],
  providers: [ LoginProvider ]
})
export class LoginPageModule {}
