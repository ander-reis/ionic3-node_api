import {Injectable} from '@angular/core';
import {Loading, LoadingController} from "ionic-angular";

@Injectable()
export class SpinnerProvider {

    private spinner: Loading = null;

    constructor(public loading: LoadingController) {

    }

    /**
     * mostra spinner
     * @param message
     */
    show(message: string): void {
        if (this.spinner == null) {
            this.spinner = this.loading.create({
                content: (message || 'Carregando...')
            });
            this.spinner.present();
        } else {
            this.spinner.data.content = message;
        }
    }

    /**
     * fecha spinner
     */
    hide(): void {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    }
}
