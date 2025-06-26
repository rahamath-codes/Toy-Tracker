import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Toys } from '../models/toys';
import { Toy } from '../toy';
import { Router } from '@angular/router';
  @Component({
    selector: 'app-add-toys',
    imports: [FormsModule,CommonModule,ReactiveFormsModule],
    templateUrl: './add-toys.html',
    styleUrl: './add-toys.css'
  })
  export class AddToys {
    toyForm = new FormGroup({
      toyName:new FormControl( "",[Validators.required,Validators.minLength(3)]),
      price: new FormControl( 0,[Validators.required,Validators.min(0.01)]),
      ageRange: new FormControl("",[Validators.required])
    })
      constructor(private toyService: Toys,private router : Router) {}
      
      onSubmit(){
        console.log("Form Submitted",this.toyForm.value)
        const formValue = this.toyForm.value;
        if (this.toyForm.valid) {
        const newToy: Toy = {
        toyName: formValue.toyName ?? '',
        price: (formValue.price ?? 0),
        ageRange: formValue.ageRange ?? ''
   };
        this.toyService.addToy(newToy);
        this.toyForm.reset();
        const toList = confirm(`Toy added Successfully! ${""}
Press ok to view Toys`);
        if(toList){
            console.log("Redirecting to Home")
            this.router.navigate(['/toylist'])
          }
       }
    }

  }
