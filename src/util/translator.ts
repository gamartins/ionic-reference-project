export class Translator {
  public static translate(text: string) {    
    let translated = text

    const words = {
      name: 'nome',
      email: 'email',
      emailConfirmation: 'confirmação de email',
      password: 'senha',
      passwordConfirmation: 'confirmação de senha',
      useTerms: 'termos de uso'
    }

    if (words[text])
      translated = words[text]

    return translated
  }
}