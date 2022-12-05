import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public errorSession: boolean = false
  public formLogin: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.min(2),
          Validators.max(50),
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required
        ])
      }
    )
  }

  public sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this.authService.sendCredentials(email, password);
  }

}
