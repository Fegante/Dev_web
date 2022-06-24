import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

declare const FB: any;


@Injectable({providedIn: 'root'})
export class FacebookInitializerService {
    constructor(private http: HttpClient) {
        FB.init({
            appId: '1430391037431832',
            cookie: true,
            xfbml: true,
            version: 'v11.0'
        });
    }


    login() {
        return new Promise((resolve, reject) => {
            return FB.login((result: any) => {
                if (result.authResponse) {
                    return this.http.post(`http://localhost:3000/api/auth/facebook`, { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(response => {
                            const token = response;
                            if (token) {
                                localStorage.setItem('id_token', JSON.stringify(token));
                            }
                            resolve(response);
                        })
                        .catch(() => reject());
                } else {
                    reject();
                    return;
                }
            }, { scope: 'public_profile,email' });
        });
    }
}
