import {NgModule} from '@angular/core';
import {QuantidadeComponent} from './quantidade/quantidade';
import {IonicModule} from "ionic-angular";
import { TabComponent } from './tab/tab';

@NgModule({
    declarations: [QuantidadeComponent,
    TabComponent],
    imports: [IonicModule],
    exports: [QuantidadeComponent,
    TabComponent]
})
export class ComponentsModule {
}
