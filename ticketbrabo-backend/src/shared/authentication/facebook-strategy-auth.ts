import { Authentication } from "./authentication";
import axios from "axios";
import { sign } from "jsonwebtoken";
import produtorService from "@services/produtor-service";
import { Pessoa } from "@models/pessoa-model";
import { PessoaEnum } from "@models/helper/pessoa-enum";
import { PessoaFactory } from "@models/helper/pessoa-factory";
import { Produtor } from "@models/produtor-model";
 
export class FacebookStrategyAuth extends Authentication {
    
    private FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
    private FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;
    private FACEBOOK_REDIRECT_TO = process.env.FACEBOOK_REDIRECT_TO;

    async getUserByAuthMethod(options?: any) {
        const token = await this.switchCodeForToken(options.code);
        const urlToken = `https://graph.facebook.com/v14.0/me?access_token=${token.access_token}`;
        
        const facebookUser = await axios.get(urlToken)
        .then(res => res.data)
        .catch(err => { throw new Error(err.mesage) });
        
        return facebookUser;
    }


    async switchCodeForToken(code: string) {
        const url = `https://graph.facebook.com/v14.0/oauth/access_token?client_id=${this.FACEBOOK_APP_ID}&redirect_uri=${this.FACEBOOK_REDIRECT_TO}&client_secret=${this.FACEBOOK_SECRET}&code=${code}`;
        
        const token = await axios.get(url)
        .then(res => res.data)
        .catch(err => { throw new Error(err.mesage) });

        return token;
    }

    async saveNewUser(user: any): Promise<any> {
        const produtor = PessoaFactory.criarPessoa(PessoaEnum.PRODUTOR) as Produtor;
        
        produtor.pessoa = { 
            oauthIdentification: user.id,
            nome: user.name,
            isRegistrationCompleted: false
         } as Pessoa;
    
        return produtorService.addOne(produtor);
    }

    async getUserIfAlreadySaved(user: any): Promise<any> {
        return await produtorService.findByEmailOrOauthId('', user.id);
    }
}