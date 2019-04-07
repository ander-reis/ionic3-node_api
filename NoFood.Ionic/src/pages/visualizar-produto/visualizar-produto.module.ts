import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VisualizarProdutoPage} from './visualizar-produto';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        VisualizarProdutoPage,
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(VisualizarProdutoPage),
    ],
})
export class VisualizarProdutoPageModule {
}
