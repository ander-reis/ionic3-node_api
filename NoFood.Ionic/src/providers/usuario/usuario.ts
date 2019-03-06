import {Injectable} from '@angular/core';
import {ProviderBase} from "../../app/base/providerBase";
import {UsuarioModel} from "../../app/models/usuarioModel";
import {HttpProvider} from "../http/http";
import {ConfigHelper} from "../../app/helpers/configHelper";
import {HttpResultModel} from "../../app/models/HttpResultModel";

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel> {

    url: string = `${ConfigHelper.Url}usuario`;

    constructor(public http: HttpProvider) {
        super(`${ConfigHelper.Url}usuario`, http);
    }

    async autenticate(email: string, senha: string): Promise<HttpResultModel> {
        return this.http.post(`${this.url}/autenticar`, {
            email: email,
            senha: senha
        });
    }
}
