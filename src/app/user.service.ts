import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  useRef!: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  CreateUser(user: any) {
    return this.useRef.push({
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      telephone: user.telephone,
      date_nais: user.date_nais,
      grade: user.grade,


    })
  }
}
