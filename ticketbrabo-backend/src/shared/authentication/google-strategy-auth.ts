import { Authentication } from "./authentication";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";
import produtorService from "@services/produtor-service";
import { PessoaFactory } from "@models/helper/pessoa-factory";
import { PessoaEnum } from "@models/helper/pessoa-enum";
import { Produtor } from "@models/produtor-model";
import { Pessoa } from "@models/pessoa-model";

export class GoogleStrategyAuth extends Authentication {

    // TODO: refactor dot env access
    private GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    private GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    private GOOGLE_REDIRECT_TO_SERVER = process.env.GOOGLE_REDIRECT_TO_SERVER;
    private GOOGLE_TOKEN_URL = process.env.GOOGLE_TOKEN_URL;

    private oauthCliente: OAuth2Client = new google.auth.OAuth2(this.GOOGLE_CLIENT_ID, this.GOOGLE_CLIENT_SECRET, this.GOOGLE_REDIRECT_TO_SERVER);

    private getGoogleAuthURL() {
        console.log(this.generateAuthUrl(this.oauthCliente));
    }

    private generateAuthUrl(oauthCliente: OAuth2Client){
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
          ];

          return oauthCliente.generateAuthUrl({
              access_type: 'offline',
              prompt: 'consent',
              scope: scopes
          });
    }
    
    async getUserByAuthMethod(options: any) {
        const { tokens } = await this.oauthCliente.getToken(options.code);
        const tokenUrl = `${this.GOOGLE_TOKEN_URL}${tokens.access_token}`;
        const headers = {
            headers: {
                Authorization: `Bearer ${tokens.id_token}`
            }
        }
        const googleUser = await axios.get(tokenUrl, headers)
        .then(res => res.data)
        .catch(err => { throw new Error(err.mesage) });

        return googleUser;
    }

    async saveNewUser(user: any): Promise<any> {
        const produtor = PessoaFactory.criarPessoa(PessoaEnum.PRODUTOR) as Produtor;

        produtor.pessoa = {
            email: user.email,
            nome : user.name,
            isRegistrationCompleted : false,
            oauthIdentification : user.id
        } as Pessoa;

        return produtorService.addOne(produtor);
    }

    async getUserIfAlreadySaved(user: any): Promise<any> {
        return await produtorService.findByEmail(user.email);
    }
}