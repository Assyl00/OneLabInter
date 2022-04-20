import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  userForm: FormGroup;
  item!: object;

  constructor(private DataService: DataService) {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    })

   }

  ngOnInit(): void {
  }

  get getFormControls(){
    return this.userForm.controls;
  }

  submit(data: FormGroup){
    this.DataService.data = this.userForm;
    this.DataService.saveToStorage();

    console.log(this.DataService.getFromStorage());
  }

  usernameCtrl(formGroup: FormGroup, ctrlName: string): any {
    return <FormGroup>formGroup.get(ctrlName)?.errors;
  }
}
