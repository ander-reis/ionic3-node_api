import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CategoriaProvider} from "../../providers/categoria/categoria";
import {CategoriaModel} from "../../app/models/categoriaModel";
import {ConfigHelper} from "../../app/helpers/configHelper";

@IonicPage()
@Component({
    selector: 'page-categoria',
    templateUrl: 'categoria.html',
})
export class CategoriaPage {

    categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private categoriaSrv: CategoriaProvider,
        public actionSheetCtrl: ActionSheetController
    ) {
    }

    ionViewWillEnter(){
        this.load();
    }

    /**
     * carrega categorias
     */
    async load(): Promise<void>{
        try{
            let categoriaResults = await this.categoriaSrv.get();
            if(categoriaResults.success){
                this.categorias = <Array<CategoriaModel>>categoriaResults.data;
            }
        }catch (error) {
            console.log('problema ao carregar as categorias', error);
        }
    }

    adminOptions(): void {
        let action = this.actionSheetCtrl.create({
            title: 'Administração',
            buttons: [
                { text: 'Gerenciar Categorias', handler: () => { this.gerenciarCategoria(); } },
                { text: 'Gerenciar Produtos', handler: () => { this.gerenciarProduto(); } },
                { text: 'Cancelar', handler: () => { }, role: 'destructive' }
            ]
        });
        action.present();
    }

    selecionarProduto(item: CategoriaModel): void {
        localStorage.setItem(ConfigHelper.storageKeys.selectCategory, JSON.stringify(item));
        this.navCtrl.setRoot('ProdutosPage');
    }

    private gerenciarCategoria(): void {
        this.navCtrl.push('AdmCategoriasPage');
    }

    private gerenciarProduto(): void {
        this.navCtrl.push('AdmProdutosPage');
    }
}
