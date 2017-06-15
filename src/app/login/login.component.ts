import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit
{

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) { }

    ngOnInit()
    {
    }

    public fazerLogin(): void
    {
        this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
        .then( (resultado) => {
            if(resultado.user != null)
            {
                this.router.navigate(["home"]);
            }
        } )
        .catch( (exception) => {
            console.error("Deu erro!");
            console.error(exception);
        });
    }

}
