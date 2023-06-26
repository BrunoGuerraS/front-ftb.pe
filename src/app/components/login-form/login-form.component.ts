import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  isEmailInvalid: any = false;
  isPasswordInvalid: any = false;
  constructor(
    private AuthService: AuthService,
  ) {}
  ngOnInit(): void {}
  get emailField(){
    return this.form.get('email');
  }
  get passwordField(){
    return this.form.get('password');
  }
  onSubmit(event: Event) {
    event.preventDefault();
    // this.form.reset();
    if (this.form.valid) {
      console.log(this.form.value);
      console.log('valid');
    }else{
      console.log(this.isEmailInvalid)
      this.isEmailInvalid = this.emailField?.invalid && this.emailField?.touched;
      this.isPasswordInvalid = this.passwordField?.invalid && this.passwordField?.touched;
    }
  }
}
