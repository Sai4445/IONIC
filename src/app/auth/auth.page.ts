import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild('myForm',{static:true}) form:NgForm;
isLoading=false;
isLogin=true;
  constructor(public authService:AuthService,public router:Router, public loadingController:LoadingController) { }

  ngOnInit() {
  }
onLogin(){
  this.isLoading=true;
  this.authService.login();
  this.loadingController.create({keyboardClose: true, message: 'Logging In...'}).then(loadingEl=>{
loadingEl.present();
setTimeout(()=>{
  this.isLoading=false;
  loadingEl.dismiss();
  this.router.navigateByUrl('/places/tabs/discover');
},1500);
  });
}
onSwitchAuthMode(){
this.isLogin=!this.isLogin;
}
onSubmit(myForm:NgForm){
if(!myForm.valid){
  return;

}
const email=myForm.value.email;
const password=myForm.value.password;
console.log(email,password);
if(this.isLogin){
//sending a request to login servers
}else{
  //sending a request to signup severs
}
}

}
