import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form = this.fb.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  onSubmit(): void {
    if (
      !(this.form.controls.email.value === 'admin'
        && this.form.controls.pass.value === 'admin')
    ) {
      alert('Credenciales incorrectas');
      return;
    };
    this.router.navigate(['/home']);
  }

}
