import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password: string = '';

  constructor( private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(){
    console.log('Uswrname', this.username);
    console.log('password', this.password);
    if(this.password.length> 0 && this.username.length>0){
      //TODO
    }else{
      this._snackBar.open('favor de introducir usuario y password','ok',{
        duration:3000
      });
    }
  }
}
