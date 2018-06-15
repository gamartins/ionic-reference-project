import { ToastController } from "ionic-angular";

export class ErrorChecker {
  public static getErrorMessage(error, toastCtlr: ToastController) {
    console.log(error)

    let error_message = ''

    if (error.hasOwnProperty('status'))
      error_message = this.getStatusCodeErrorMessage(error)
    else
      error_message = 'Ocorreu um erro inesperado'

    toastCtlr.create({
      message: error_message,
      position: 'top',
      duration: 3000
    }).present()

    return error_message
  }

  private static getStatusCodeErrorMessage(error) {
    let errorMessage = ''

    errorMessage = (error.status == 401) ? 'Usuário não possui permissão para acessar o recurso' : errorMessage;
    errorMessage = (error.status == 404) ? 'Não foi possível encontrar o servidor' : errorMessage;
    errorMessage = (error.status == 422) ? 'Não foi possível prosseguir com a requisição' : errorMessage;
    errorMessage = (error.status == 500) ? 'Ocorreu um erro inesperado' : errorMessage;

    errorMessage = (errorMessage == '') ? 'Não foi possível se conectar' : errorMessage;

    return errorMessage
  }
}