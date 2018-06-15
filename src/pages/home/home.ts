import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { ErrorChecker } from '../../util/error-checker'
import { CustomValidators } from '../../util/custom-validators'
import { FeedbackUser } from '../../util/feedback-user';

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
      password: [ '', Validators.compose([Validators.required, Validators.minLength(10)]) ],
      passwordConfirmation: [ '', Validators.required ],
      useTerms: [ false , Validators.requiredTrue ]
    }, {
      validator: [ CustomValidators.matchPassword, CustomValidators.matchEmail ]
    })

  }

  send(){
    if(this.isFormInvalid())
    
    console.log(this.someForm.value)
  }

  isFormInvalid() {
    let isFormInvalid = false

    if(this.someForm.invalid) {
      const errors = ErrorChecker.getFormError(this.someForm.controls)
      FeedbackUser.showMessage(this.toastCtrl, errors[0])
    } else {
      isFormInvalid = true
    }

    return isFormInvalid
  }
}
