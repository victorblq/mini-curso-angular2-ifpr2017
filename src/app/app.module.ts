import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule, appRoutingProviders } from './routing.module';

import { MdIconModule, MdToolbarModule, MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const config = {
    apiKey: "AIzaSyBXCP8Q7jr6vgSns6cO6gL2cPpVSGJ9c3o",
    authDomain: "mini-curso-teste.firebaseapp.com",
    databaseURL: "https://mini-curso-teste.firebaseio.com",
    projectId: "mini-curso-teste",
    storageBucket: "mini-curso-teste.appspot.com",
    messagingSenderId: "880844902732"
};

@NgModule( {
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RoutingModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        MdToolbarModule, 
        MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdIconModule
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
} )
export class AppModule { }
