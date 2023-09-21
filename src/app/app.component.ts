import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userForm!: FormGroup;

  countryList = [
    { "countryname" : "India" },
    { "countryname" : "USA" },
    { "countryname" : "England" }
  ];

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'phoneno' : new FormControl(null,[Validators.required, Validators.minLength(10)]),
      'gender': new FormControl(null),
      'isMarried': new FormControl(null),
      'address' : new FormGroup({
      'country': new FormControl(null),
      'city': new FormControl(null),
      'street': new FormControl(null),
      'pincode': new FormControl(null,[Validators.required, Validators.minLength(6)])
      })
    });
    // this.userForm.setValue({
    //   firstname: 'raja',
    //   lastname: 'muthiaha',
    //   email: 'as@gmail.com',
    //   gender: 'male',
    //   isMarried: true,
    //   address:{
    //     country: 'USA',
    //     city: 'Long Island',
    //     street: '127, walkl mart',
    //     pincode: '659 258'
    //   }
    // });
    // this.userForm.patchValue({
    //   firstname : 'rrrrrr',
    // });
  }
  onSubmit(){
    console.log(this.userForm);
    this.userForm.reset
  }
}
