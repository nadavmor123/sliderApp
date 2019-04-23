import {NgModule} from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';

import { HomeScreenComponent } from './home-screen/home-screen.component';

const appRoutes : Routes = [
    {
        path:"",
        component:HomeScreenComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}