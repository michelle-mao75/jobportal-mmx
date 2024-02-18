import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  login(email:string, password:string){
      this.fireauth.signInWithEmailAndPassword(email,password).then(()=>
      {
        if(email=="admin@admin.com"){
          localStorage.setItem('admin','true');
          this.router.navigate(['/dashboard']);
        }
        else {
          localStorage.setItem('user','true');
          this.router.navigate(['/query']);
        }
        
        
      },err => {
          alert("Something were wrong");
          this.router.navigate(['/login']);        
      })  
    }

  register(email: string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>
    {
      alert("Registration successful");
      this.router.navigate(["/login"]);
    },err =>{
      alert (err.message);
      this.router.navigate(["/register"]);
    })
  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);
    })
  }
}
