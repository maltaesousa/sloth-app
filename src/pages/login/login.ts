import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../app/auth.service';
import { OnInit } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    constructor(
        public navCtrl: NavController,
        public authService: AuthService) { }

    server: string;
    username: string;
    password: string;

    /*
    login() {
        this.authService.login(this.username, this.password).subscribe(
             data => {      
               //Navigate to home page              
                this.navCtrl.setRoot(HomePage);
             }
          )
       }*/

    login() {
        this.authService.setUrl(this.server);
        this.navCtrl.setRoot(HomePage);
    }
}
