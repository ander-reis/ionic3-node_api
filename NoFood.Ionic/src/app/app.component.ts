import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UsuarioProvider} from "../providers/usuario/usuario";
import {OneSignal} from "@ionic-native/onesignal";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = UsuarioProvider.isLogado ? 'CategoriaPage' : 'LoginPage';

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private oneSignal: OneSignal
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            if(platform.is('cordova')){
                this.oneSignal.startInit('e3c64c01-b297-471d-80f8-6fa1a34976af', '975588238794');

                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

                this.oneSignal.handleNotificationReceived().subscribe(() => {
                    // do something when notification is received
                });

                this.oneSignal.handleNotificationOpened().subscribe(() => {
                    // do something when a notification is opened
                });

                this.oneSignal.endInit();
            }
        });
    }
}

