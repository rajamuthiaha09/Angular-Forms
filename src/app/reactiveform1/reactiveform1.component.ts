import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component implements OnInit{

  email = new FormControl('abc@gmail.com',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
  showEmailDetails(){
    console.log('valid' , this.email.valid);
    console.log('error' , this.email.errors);
  }
  constructor(){
    // this.email.valueChanges.subscribe(data => {
    //   console.log(data);
    // })
    // this.email.statusChanges.subscribe(validOrInvalid => {
    //   console.log(validOrInvalid);
    // })
  }
  ngOnInit(){
  }

}
