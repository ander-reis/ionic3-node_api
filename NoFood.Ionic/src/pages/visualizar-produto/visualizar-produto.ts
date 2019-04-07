import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";
import {ProdutoModel} from "../../app/models/produtoModel";

@IonicPage()
@Component({
    selector: 'page-visualizar-produto',
    templateUrl: 'visualizar-produto.html',
})

export class VisualizarProdutoPage {

    produto: ProdutoModel = new ProdutoModel();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ViewCtrl: ViewController,
        private alertSrv: AlertProvider) {

    }

    ionViewDidLoad() {
        this.produto = <ProdutoModel>this.navParams.get('prod');
        console.log(this.produto);
    }

    voltar() {
        this.ViewCtrl.dismiss();
    }

    adicionarNoCarrinho() {
        this.alertSrv.toast('Produto adicionado ao carrinho com sucesso!', 'bottom');
        this.ViewCtrl.dismiss();
    }

}
