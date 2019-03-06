import {Injectable} from '@angular/core';
import {Platform} from "ionic-angular";

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class NetworkProvider {

    constructor(private platform: Platform) {

    }

    get isOnline(): boolean {
        if (this.platform.is('cordova')) {
            if (navigator.connecion && navigator.connection.type) {
                return (navigator.connection.type != Connection.UNKNOWN && navigator.connection.type != Connection.NONE)
            } else {
                return true;
            }
        } else {
            return navigator.onLine;
        }
    }
}
