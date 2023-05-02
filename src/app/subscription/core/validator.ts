import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export function validator (): ValidatorFn  {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const digits = control.value.toString();
      const visaMatch = /^4[0-9]{12}(?:[0-9]{3})?$/
      const digitMatch = digits.replace(/ /g, '')

      if (!/^\d+$/.test(digitMatch)) {
        return {creditCardNumberInvalid: true}; // contains non-numeric characters
      }

      if (!(visaMatch.test(digitMatch))) {
        return {creditCardTypeInvalid: true}; // invalid visa card type
      }

      if (![13, 16].includes(digits.length)) {
        return {creditCardNumberLengthInvalid: true}; // invalid length
      }

    }
    return null
  }

}
