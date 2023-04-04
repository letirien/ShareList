import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PresentListComponent } from "./present-list/present-list.component"
import { LandingComponent } from "./landing/landing.component"


const routes: Routes = [
    {path: 'sharelist', component: PresentListComponent},
    {path: '', component: LandingComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],  
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}