import { TopbrandsComponent } from './components/topbrands/topbrands.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { ProductbycatComponent } from './components/productbycat/productbycat.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', redirectTo: "", pathMatch: 'full' },
  { path: "", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "preview/:id", component: PreviewComponent },
  { path: "productsbycat", component: ProductbycatComponent }, //
  { path: "products", component: ProductsComponent },
  { path: "topbrands", component: TopbrandsComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
