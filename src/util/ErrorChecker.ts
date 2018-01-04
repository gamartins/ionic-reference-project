export class ErrorChecker {
    static getErrorMessage(error) {
        console.log(error)
        
        let error_message = ''

        if (error.hasOwnProperty('status')) {
            error_message = this.getStatusCodeErrorMessage(error)
        } else {
            error_message = 'Ocorreu um erro inesperado'
        }

        return error_message
    }

    private static getStatusCodeErrorMessage(error) {
        let errorMessage = 'Não foi possível se conectar'
    
        if (error.status == '401') {
            errorMessage = 'Usuário não possui permissão para acessar o recurso'
        }

        if (error.status == '404') {
            errorMessage = 'Não foi possível encontrar o servidor'
        }
          
        if (error.status == '422') {
            errorMessage = 'Não foi possível prosseguir com a requisição'
        }
      
        if (error.status == '500') {
            errorMessage = 'Ocorreu um erro inesperado'
        }

        return errorMessage
    }
}