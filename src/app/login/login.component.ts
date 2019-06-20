import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loading= true;
  formLogin: FormGroup;
  constructor( private _snackBar: MatSnackBar, private _api: ApiService, private _fb: FormBuilder,
    private dataService: DataService, private router: Router ) {
    this.formLogin= this._fb.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
    this.formLogin.get('password').valueChanges.subscribe(val => {
      console.log(val);
    });
    this.dataService.getIsLoading().subscribe(val=>{
      this.loading=!val;
    });
   }

  ngOnInit() {
  }

  login(){
    this.dataService.setIsLoading(true);

    console.log('Uswrname', this.formLogin.get("username").value);
    console.log('password', this.formLogin.get("password").value);
      this._api.login( this.formLogin.get("username").value, this.formLogin.get("password").value).subscribe(res =>{
        this._snackBar.open(res.token,'ok',{
          duration:3000 });
          this.router.navigate(['colors']);
      }, err=>{
        this._snackBar.open(err.error.error,'ok',{
          duration:3000 });
      }, ()=>{
          console.log('ya termine 7UwU7')
          this.dataService.setIsLoading(false);
      });
  }
}
