import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiAuthService } from "../services/api-auth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    // public loginForm = new FormGroup({
    //     email: new FormControl(''),
    //     password: new FormControl('')
    // });

    public loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(private apiAuth: ApiAuthService, private router: Router, private formBuilder: FormBuilder) {
        if (this.apiAuth.usuarioData) {
            //console.log(this.apiAuth.usuarioData);
            this.router.navigate(['/']);
        }
    }

    login() {
        this.apiAuth.login(this.loginForm.value).subscribe(response => {
            if (response.exito === 1) {
                this.router.navigate(['/home']);
            }
        })
    }
}