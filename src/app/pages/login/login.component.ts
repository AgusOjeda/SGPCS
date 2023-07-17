import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    username:['', [Validators.required, Validators.minLength(6)]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });
  error = '';

  constructor(private fb: FormBuilder) {
    
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
