import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MinhaContaPage} from './minha-conta';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        MinhaContaPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MinhaContaPage),
    ],
})
export class MinhaContaPageModule {
}
