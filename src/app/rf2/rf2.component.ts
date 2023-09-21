import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf2',
  templateUrl: './rf2.component.html',
  styleUrls: ['./rf2.component.css']
})
export class Rf2Component implements OnInit{
  form = new FormGroup({ 
    username : new FormControl('',[Validators.required,this.validateUsername],this.validateUsernameAsync)
  });
  constructor(){}
  ngOnInit(): void {
    
  }

  // validatefn
  validateUsername(control: AbstractControl): ValidationErrors | null{
    if(control.value.toString().startsWith('a')){
      return {invalid:true};
    }else{
      return null;
    }
  }

  //Asyncfn
  validateUsernameAsync(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() =>{    //timedelay
        if(control.value.toString().endsWith('k')){
          resolve({invalid:true});
        }else{
          resolve(null);
        }
      },5000);
    });
  }
    
}
