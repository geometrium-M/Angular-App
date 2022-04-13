import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

 
import { MenuComponent } from "./pages/menu/menu.component";


const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    
    {
        path:'about',
        loadChildren: () => import('./pages/about/about/about.module').then(m=>m.AboutModule)
    },
    {
        path:'services',
        loadChildren: () => import ('./pages/services/services/services.module').then(m=>m.ServicesModule)
    },
    {
        path:'menu',
        component: MenuComponent
    },
    {
        path:'contacts',
        loadChildren: () => import ('./pages/contacts/contacts/contacts.module').then(m=>m.ContactsModule)
    },
    {
        path:'**',
        component: NotFoundComponent
    }

];

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule {

}   