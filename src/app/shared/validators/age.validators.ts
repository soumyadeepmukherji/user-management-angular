import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidator(minAge:  number = 18): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const dob = control.value

        if(!dob){
            return null
        }

        const birthDate = new Date(dob)
        const today = new Date()

        let age = today.getFullYear() - birthDate.getFullYear()
        let mounthDiff = today.getMonth() - birthDate.getMonth()

        if(mounthDiff < 0 || (mounthDiff === 0 && today.getDate() < birthDate.getDate())){
            age --
        }

        if(age < 0){
            return {inValidDate: true}
        }

        return age >= minAge ? null : {ageRestriction: {requiredAge: minAge, actualAge: age}}
    }
}