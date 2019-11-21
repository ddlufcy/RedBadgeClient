import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
     styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

    private registerForm: FormGroup;

    constructor(private form: FormBuilder,
        private auth: Auth,
        private router: Router) { 
            this.createForm();
        }

    ngOnInit() {
    }
    createForm(){
        this.registerForm = this.form.group({
            userName :new FormControl,
            password: new FormControl
        });
    }

    onSubmit(){
        console.log(this.registerForm.value);
        this.auth.register(this.registerForm.value)
        .subscribe(() => console.log('Im in'));
        this.router.navigate(['/']);
    }

   

}

