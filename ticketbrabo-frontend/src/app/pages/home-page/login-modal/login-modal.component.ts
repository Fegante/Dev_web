import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppSettings } from "src/app/app-settings";
import { catchError } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { MessageService } from "src/app/shared/services/message.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Component({
    selector: "homepage-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["login-modal.component.css"]
})
export class LoginModalComponent implements OnInit{
    static LOGIN_MESSAGE = "Logado com sucesso!";

    public form!: FormGroup;

    @Output()
    emitCloseLoginModal = new EventEmitter<boolean>();

    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService,
        private router: Router,
        private authService: AuthenticationService,
        private activedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [Validators.email] }),
            password: new FormControl(null)
        });

        const authToken = this.activedRoute.snapshot.paramMap.get("authToken");
        if (authToken) {
            localStorage.setItem("authToken", authToken);
            window.close();
        }

        if (this.authService.isTokeNotNull()) {
            this.router.navigate(["/evento"]);
        }

    }

    clickGoogleLoginAuth() {
        const url = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=743607987428-ao886h6i5o2aufju7a56u6huvcce9bm2.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flocalhost%2Fapi%2Fauth%2Fgoogle";
        this.createOauthWindow(url);
    }

    clickToCloseLoginModal() {
        this.emitCloseLoginModal.emit(false);
    }

    onClickToSignIn() {
        if (this.form.valid && this.isFieldsWithValues()) {

            this.httpClient.post(`${AppSettings.HTTPS}/api/auth/local`, this.form.value)
                .pipe(catchError((err) => this.treateErrorLogin(err)))
                .subscribe((data: any) => {

                    localStorage.setItem("authToken", data.data);
                    this.messageService.registerMessage(LoginModalComponent.LOGIN_MESSAGE);
                    this.router.navigate(["/evento"]);
                });
        }
    }

    loginWithFacebook() {
        const url = `https://www.facebook.com/v14.0/dialog/oauth?client_id=1430391037431832&redirect_uri=https://localhost/api/auth/facebook&state=teste&scope=["public_profile","email"]`;
        this.createOauthWindow(url);
    }

    isFieldsWithValues(): boolean {
        return this.form.get("email")?.value != null
            && this.form.get("password")?.value != null
            && this.form.valid
    }

    treateErrorLogin(error: any) {
        if (error.status && error.status == 401) {
            this.messageService.registerMessage("Usuário ou senha incorretos");
        }

        return of(EMPTY);
    }


    createOauthWindow(url: string, name = 'Authorization') {
        const popup = this.popupCenter(url, name, 500, 600);
        if (popup) {
            const interval = setInterval(() => {
                if (popup.closed && this.authService.isTokeNotNull()) {
                    this.router.navigate(["/evento"]);
                    clearInterval(interval);
                    this.messageService.registerMessage(LoginModalComponent.LOGIN_MESSAGE);

                }
            }, 300);
        }
    }

    popupCenter(url: string, title: string, w: any, h: any) {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft;
        const top = (height - h) / 2 / systemZoom + dualScreenTop;
        const newWindow = window.open(url, title,
            `
          scrollbars=yes,
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left}
          `
        );

        newWindow?.focus();

        return newWindow;
    }
}