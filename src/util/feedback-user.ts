import { ToastController } from 'ionic-angular/components/toast/toast-controller'

export class FeedbackUser {
  public static showMessage(toastCtlr: ToastController, message, duration = 3000) {
    toastCtlr.create({
      message: message,
      duration: duration,
      position: 'top',
    }).present()
  }
}