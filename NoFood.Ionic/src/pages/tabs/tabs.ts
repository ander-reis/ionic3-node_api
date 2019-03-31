import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private app: App
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TabsPage');
    }

    selecionarCategoria(event): void {
        let navagacaoAnterior = event.linker._history[event.linker._history.length - 2];

        if (event.tabTitle == 'Categorias' && navagacaoAnterior != '/categoria') {
            this.app.getRootNav().setRoot('CategoriaPage');
        }
    }
}
