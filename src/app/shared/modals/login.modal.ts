import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';
import { LoginResponse } from 'ngx-facebook/dist/esm/models/login-response';


@Component({
    selector: 'dlogin-modal',
    templateUrl: 'login.modal.html',
})
export class LoginModal {

    constructor(public dialogRef: MatDialogRef<LoginModal>,
        private fb: FacebookService) { }

    login() {
        this.fb.login()
            .then((response: LoginResponse) => console.log(response))
            .catch((error: any) => console.error(error));
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}