import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  userData: any; // Save logged in user data
  existe : any


  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,

  ) {
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });

    // AAAAAAAA
    this.existe = JSON.parse(localStorage.getItem('user')!);
    if(this.existe !== null){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }

}
