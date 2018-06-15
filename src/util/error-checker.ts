import { Translator } from "./translator";

export class ErrorChecker {
    public static getFormError(controls) {
        let errors = []

        Object.keys(controls).forEach(key => {
            console.log('key:', key)
            if(controls[key].errors)
                console.log(controls[key].errors)

            if(controls[key].errors && controls[key].errors.required)
                errors.push(`O campo ${Translator.translate(key)} é obrigatório`)
            
            if(controls[key].errors && controls[key].errors.minlength) {
                const requiredLength = controls[key].errors.minlength.requiredLength
                errors.push(`O campo ${Translator.translate(key)} deve possuir no mínimo ${requiredLength } caracteres`)
            }

            if(controls[key].errors && controls[key].errors.maxlength) {
                const requiredLength = controls[key].errors.maxlength.requiredLength
                errors.push(`O campo ${Translator.translate(key)} deve possuir no máximo ${requiredLength} caracteres`)
            }

            if(controls[key].errors && controls[key].errors.email) {
                errors.push(`O campo ${Translator.translate(key)} deve estar no formato nome@email.com`)
            }

            if(controls[key].errors && controls[key].errors.matchPassword) {
                errors.push(`O campos senha e confirmar senha devem ser iguais`)
            }

            if(controls[key].errors && controls[key].errors.matchEmail) {
                errors.push(`O campos email e confirmar email devem ser iguais`)
            }
        })

        return errors

    }
}