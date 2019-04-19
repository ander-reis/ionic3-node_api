import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";
import {ProdutoModel} from "../../app/models/produtoModel";
import {CarrinhoProvider} from "../../providers/carrinho/carrinho";

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
        private alertSrv: AlertProvider,
        private carrinhoSrv: CarrinhoProvider) {

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
        this.carrinhoSrv.adicionarNovoItem(this.produto);
        this.ViewCtrl.dismiss();
    }

}
