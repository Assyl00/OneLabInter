import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/shared/interfaces/data';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  writefb: boolean = true;
  showfb: boolean = false;

  name = '';
  text = '';


  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
  ) {
    this.feedbackForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        feedback: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
      }
    );
    
  }

  ngOnInit(): void {
    this.writefb = true;
  }


  submit() {
    const {name, feedback} = this.feedbackForm.value;
    const login = localStorage.getItem('login');
    if (login === 'assyl') {
      this.writefb = false;
      this.showfb = true;
      this.name = name;
      this.text = feedback;
    }
    else{
      alert("Please authorize first!");
      this.router.navigateByUrl('/login');
    }
  }

  getFeedback(){
    return localStorage.getItem('name'), localStorage.getItem('feedback');
  }

  controlErrors(formGroup: FormGroup, ctrlName: string): any {
    return <FormGroup>formGroup.get(ctrlName)?.errors;
  }


}
