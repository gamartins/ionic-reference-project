import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { ErrorChecker } from '../../util/error-checker'
import { CustomValidators } from '../../util/custom-validators'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private someForm : FormGroup;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder) {
    
    this.someForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', Validators.compose([ Validators.required, Validators.email ])],
      emailConfirmation: [ '', Validators.compose([ Validators.required, Validators.email ])],
      password: [ '', Validators.required ],
      passwordConfirmation: [ '', Validators.required ],
      useTerms: [ false , Validators.requiredTrue ]
    }, {
      validator: [ CustomValidators.matchPassword, CustomValidators.matchEmail]
    })

  }

  showMessage(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    }).present()
  }

  send(){
    const errors = ErrorChecker.getFormError(this.someForm.controls)
    
    if(errors.length == 0)
      console.log(this.someForm.value)
    else
      this.showMessage(errors[0])
  }
}
