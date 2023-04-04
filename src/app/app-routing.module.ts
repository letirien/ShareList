import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PresentListComponent } from "./present-list/present-list.component"
import { LandingComponent } from "./landing/landing.component"
import { PresentComponent } from "./present/present.component"


const routes: Routes = [
    {path:'sharelist/present/:id', component: PresentComponent},
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