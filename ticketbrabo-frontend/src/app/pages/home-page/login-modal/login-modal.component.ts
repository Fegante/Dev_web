import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MenuLoggedService } from "src/app/shared/components/menu-logged/menu-logged.service";

@Component({
    selector: "homepage-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["login-modal.component.css"]
})
export class LoginModalComponent implements OnInit{

    public form!: FormGroup;

    @Output()
    emitCloseLoginModal = new EventEmitter<boolean>();

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [ Validators.email ] }),
            password: new FormControl('', { validators: [ Validators.nullValidator , Validators.pattern("[A-Za-z0-9 ]")] })
        });
    }

    clickGoogleLoginAuth() {
        const url = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=743607987428-ao886h6i5o2aufju7a56u6huvcce9bm2.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fgoogle";
        window.open(url, "_blank");
    }

    clickToCloseLoginModal() {
        this.emitCloseLoginModal.emit(false);
    }

    onClickToSignIn() {
        console.log(this.form);
        if(this.form.valid) {
            console.log(this.form.value);
        }
    }

    isFieldsWithValues():boolean {
        return this.form.get("email")?.value != null && this.form.get("password")?.value != null
    }
 }