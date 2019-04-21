import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UsuarioProvider} from "../providers/usuario/usuario";
// import {OneSignal} from "@ionic-native/onesignal/ngx";
// import {ConfigHelper} from "./helpers/configHelper";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = UsuarioProvider.isLogado ? 'CategoriaPage' : 'LoginPage';

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        //private oneSignal: OneSignal
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            // this._configOneSignal();
        });
    }

    // private _configOneSignal(): void{
    //     if(this.platform.is('cordova')){
    //         this.oneSignal.startInit('ab0c582c-24fb-43f1-9aea-afb7a6b36186');
    //
    //         this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    //
    //         this.oneSignal.handleNotificationReceived().subscribe(data => {
    //             // do something when notification is received
    //             console.log('noificação recebida', data);
    //         });
    //
    //         this.oneSignal.handleNotificationOpened().subscribe(data => {
    //             // do something when a notification is opened
    //             console.log('noificação aberta', data);
    //         });
    //
    //         this.oneSignal.getIds().then( result => {
    //             localStorage.setItem(ConfigHelper.storageKeys.oneSignalUid, result.userId);
    //             console.log('oneSignal', JSON.stringify(result));
    //         });
    //
    //         this.oneSignal.endInit();
    //     }
    // }
}

