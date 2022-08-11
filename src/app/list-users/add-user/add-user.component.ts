import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  UserForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      date_nais: ['', Validators.required],
      telephone: ['', Validators.required],
      grade: ['', Validators.required],
    })
  }

  ajouter() {
    console.log(this.UserForm.value);
    // this.userservice.CreateUser(this.UserForm.value)
  }
}
