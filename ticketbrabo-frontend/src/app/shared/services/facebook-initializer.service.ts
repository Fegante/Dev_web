import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

declare const FB: any;


@Injectable({providedIn: 'root'})
export class FacebookInitializerService {
    static SERVER_APP:string = "https://localhost:443";

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
            const options = {
                scope: "public_profile,email"
            };
            return FB.login((result: any) => {
                if (result.authResponse) {
                    console.log(result)
                    return this.http.post(`${FacebookInitializerService.SERVER_APP}/api/auth/facebook`, { accessToken: result.authResponse.accessToken })
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
            }, options);
        });
    }
}
