import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {CategoriaModel} from "../../app/models/categoriaModel";
import {CameraProvider} from "../../providers/camera/camera";
import {CategoriaProvider} from "../../providers/categoria/categoria";
import {AlertProvider} from "../../providers/alert/alert";

@IonicPage()
@Component({
    selector: 'page-adm-categoria',
    templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {

    categoria: CategoriaModel;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController,
        public platform: Platform,
        private cameraSrv: CameraProvider,
        private categoriaSrv: CategoriaProvider,
        private alertSrv: AlertProvider
    ) {

        let _categ = this.navParams.get('_categoria');
        if (_categ) {
            this.categoria = <CategoriaModel>_categ;
        } else {
            this.categoria = new CategoriaModel();
        }
    }

    async salvar(): Promise<void> {
        let sucesso = false;
        if (!this.categoria._id) {
            let cadastroResult = await this.categoriaSrv.post(this.categoria);
            sucesso = cadastroResult.success;
        } else {
            let updateResult = await this.categoriaSrv.put(this.categoria._id, this.categoria);
            sucesso = updateResult.success;
        }
        if (sucesso) {
            this.alertSrv.toast('Categoria salva com sucesso!', 'bottom');
            this.navCtrl.setRoot('AdmCategoriasPage');
        }
    }

    async excluir(): Promise<void> {
        try {
            this.alertSrv.confirm('Excluir?', `Deseja realmente excluir a categoria ${this.categoria.titulo}?`,
                async () => {
                    let excluirResult = await this.categoriaSrv.delete(this.categoria._id);
                    if (excluirResult.success) {
                        this.alertSrv.toast('Categoria excluída com sucesso!', 'bottom');
                        this.navCtrl.setRoot('AdmCategoriasPage');
                    }
                });
        } catch (error) {
            console.log('Erro ao excluir', error);
        }
    }

    getPictureOption(): void {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Adicionar Foto',
            buttons: [{
                text: 'Tirar',
                handler: () => {
                    this.cameraSrv.takePicture(photo => {
                        this.categoria.foto = photo;
                    });
                },
                icon: this.platform.is('ios') ? null : 'camera'
            }, {
                text: 'Pegar galeria',
                handler: (() => {
                    this.cameraSrv.getPictureFromGalery(photo => {
                        this.categoria.foto = photo;
                    });
                }),
                icon: this.platform.is('ios') ? null : 'images'
            }, {
                text: 'Cancelar',
                role: 'destructive',
                handler: (() => {
                    //cancela ação
                }),
                icon: this.platform.is('ios') ? null : 'close'
            }]
        });
        actionSheet.present();
    }
}
