import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppSettings } from "src/app/app-settings";
import { catchError } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { MessageService } from "src/app/shared/services/message.service";
import { Router } from "@angular/router";

@Component({
    selector: "homepage-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["login-modal.component.css"]
})
export class LoginModalComponent implements OnInit{

    public form!: FormGroup;

    @Output()
    emitCloseLoginModal = new EventEmitter<boolean>();

    constructor(private httpClient: HttpClient, private messageService: MessageService, private router: Router) {

    }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [ Validators.email ] }),
            password: new FormControl(null)
        });
    }

    clickGoogleLoginAuth() {
        const url = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=743607987428-ao886h6i5o2aufju7a56u6huvcce9bm2.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flocalhost%2Fapi%2Fauth%2Fgoogle";
        window.location.href = url;
    }

    clickToCloseLoginModal() {
        this.emitCloseLoginModal.emit(false);
    }

    onClickToSignIn() {
        if(this.form.valid && this.isFieldsWithValues()) {
           
            this.httpClient.post(`${AppSettings.HTTPS}/api/auth/local`, this.form.value)
            .pipe(
                catchError((err) => this.treateErrorLogin(err))
                )
            .subscribe( (data:any) => {

                localStorage.setItem("authToken", data.data);
                this.messageService.registerMessage("Logado com sucesso!")
                this.router.navigate(["/evento"]);
            });
            
        }
    }

    loginWithFacebook() {
        window.location.href = `https://www.facebook.com/v14.0/dialog/oauth?client_id=1430391037431832&redirect_uri=https://localhost/api/auth/facebook&state=teste&scope=["public_profile","email"]`;
    }

    isFieldsWithValues():boolean {
        return this.form.get("email")?.value != null
        && this.form.get("password")?.value != null
        && this.form.valid
    }

    treateErrorLogin(error: any) {
        if(error.status && error.status == 401) {
            this.messageService.registerMessage("Usuário ou senha incorretos");
        }

        return of(EMPTY);
    }

 }