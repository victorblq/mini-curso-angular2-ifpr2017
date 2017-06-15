import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( routes, { useHash: true } );

/**
 *
 */
@NgModule( {
    imports: [
        routing
    ],
    exports: [
        RouterModule
    ]
} )
export class RoutingModule
{
}

export const appRoutingProviders: any[] = [];