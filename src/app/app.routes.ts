import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { GeneralcardComponent } from './components/generalcard/generalcard.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

export const routes: Routes = [
    { path: "general", component: ProductsComponent},
    { path: "list", component: ListcomponentComponent},
    { path: "", redirectTo: "general", pathMatch: "full"},
    { path: "product/:id", component: ProductCardComponent},
    { path: "not-found", component: NotfoundComponent},
    { path: "**", redirectTo: "not-found", pathMatch: "full"}
];
