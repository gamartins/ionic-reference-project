import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginProvider } from '../../providers/login';

import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [ LoginProvider ]
})
export class HomePageModule {}
