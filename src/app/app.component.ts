import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Plugins,Capacitor} from '@capacitor/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform, public authService:AuthService) {}
  onLogOut(){
    this.authService.logout();

  }
  initializeApp(){
    this.platform.ready().then(()=>{
if(Capacitor.isPluginAvailable('SplashScreen')){
  Plugins.SplashScreen.hide();
}
    });
  }
}
