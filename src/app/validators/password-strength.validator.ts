import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;

    if(!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    // Verificar se o password é valido
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    // Retornando o valor
    return !passwordValid ? {passwordStrength: true}: null;
  }
}


// ValidatorFn -> retorno é uma função de validação
