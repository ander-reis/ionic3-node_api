import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MeusPedidosPage} from './meus-pedidos';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        MeusPedidosPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MeusPedidosPage),
    ],
})
export class MeusPedidosPageModule {
}
