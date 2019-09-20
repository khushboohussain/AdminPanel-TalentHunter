import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: any;

  constructor(private router: Router, private auth: AuthService, private api: ApiService) { }

  ngOnInit() {
  }

  login() {
    // if (this.email == 'admin' && this.password == 'admin') {
    //   this.router.navigate(['dashboard/mainpage']);
    // }
    this.auth.login(this.email, this.password)
      .then(res => {
        // console.log( 'User Record Res: ', res);
        this.api.getUser(res.user.uid)
          .subscribe((user: any) => {
            // console.log( 'User Record: ', user);
            if (user.userType === 'admin') {
              // console.log('admin working...');
              localStorage.setItem('uid', res.user.uid);
              // this.navController.navigateRoot('admin/employees');
              this.router.navigate(['dashboard/mainpage']);
            } else {
              this.auth.logout();
              // this.helper.presentToast('User Account Doesnt Exists!');
            }
          })
        }, err => {
        // this.toastr.error(err.message,'Error!');
        console.log(err.message);
        // this.helper.presentToast(err.message + 'Error!');
      });
  }
}