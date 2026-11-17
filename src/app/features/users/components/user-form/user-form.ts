import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../../../core/services/toast.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-user-form',
  standalone: false,
  styleUrl: './user-form.css',
  templateUrl: './user-form.html',
})
export class UserForm implements OnInit{
  dataForm: any
  constructor(private fb: FormBuilder, private api: UserService, private toast: ToastService){}

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      address: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      website: ['',[Validators.required,Validators.pattern(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[A-za-z]{2,})+(\/[^\s]*)?$/)]],
      company: ['',Validators.required],
      skills: this.fb.array([]),
      documents: this.fb.array([])
    })
  }

  // Skills
  get skills(): FormArray{
    return this.dataForm.get('skills') as FormArray
  }

  addSkill(event: MatChipInputEvent){
    const value = (event.value || '').trim()

    if(value){
      this.skills.push(this.fb.control(value,Validators.required))
    }
    event.chipInput.clear()
  }

  removeSkill(index: number){
    this.skills.removeAt(index)
  }

  // Doucuments
  get documents(): FormArray{
    return this.dataForm.get('documents') as FormArray
  }

  addDocument(event: Event): void{
    const input = event.target as HTMLInputElement

    if(!input.files?.length) return

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]; 

    Array.from(input.files).forEach(file => {
      if(!allowedTypes.includes(file.type)){
        alert(`${file.name} is not supported file.`)
        return
      }

      const exists = this.documents.controls.some(
        control => control.get('filename')?.value === file.name
      )
      if(exists) return

      const documentGroup = this.fb.group({
        filename: [file.name, Validators.required],
        file: [file, Validators.required]
      })

      this.documents.push(documentGroup)
    })
    input.value = ''
  }

  removeDocument(index: number){
    this.documents.removeAt(index)
  }

  onSubmit(){
    if(this.dataForm.valid){
      console.log()
      const payload = {
        name: this.dataForm.get('firstname').value +' '+ this.dataForm.get('lastname').value,
        username: this.dataForm.get('firstname').value,
        email: this.dataForm.get('email').value,
        address: this.dataForm.get('address').value,
        phone: this.dataForm.get('phone').value,
        website: this.dataForm.get('website').value,
        skills: this.dataForm.get('skills').value,
        documents: this.dataForm.get('documents').value
      }
      console.log(payload)
      this.api.addData(payload).subscribe({
        next: (response) => {
          console.log('Full response',response)
          console.log('status',response.status);
          console.log('body',response.body);
          console.log('headers',response.headers);

          if(response.status === 201){
            this.toast.showSuccess()
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log('error status', error.status);
          console.log('error message', error.message);
          console.log('error response', error.error);
        }
      })

      console.log(this.dataForm.value)
    }
    
  }
}
