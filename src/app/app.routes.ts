import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', loadComponent: ()=> import(`./components/home/home.component`).then((c)=> c.HomeComponent)},
    {path:'rooms', loadComponent: ()=> import(`./components/rooms/rooms.component`).then((c)=> c.RoomsComponent)},
    {path:'collections', loadComponent: ()=> import(`./components/collections/collections.component`).then((c)=> c.CollectionsComponent)},
    {path:'products/:name', loadComponent: ()=> import(`./components/products/products.component`).then((c)=> c.ProductsComponent)},
    {path:'product-details/:id', loadComponent: ()=> import(`./components/product-details/product-details.component`).then((c)=> c.ProductDetailsComponent)},
    {path:'cart', loadComponent: ()=> import(`./components/cart/cart.component`).then((c)=> c.CartComponent)},
    {path:'register', loadComponent: ()=> import(`./components/register/register.component`).then((c)=> c.RegisterComponent)},
    {path:'login', loadComponent: ()=> import(`./components/login/login.component`).then((c)=> c.LoginComponent)},
    {path:'about-us', loadComponent: ()=> import(`./components/about-us/about-us.component`).then((c)=> c.AboutUsComponent)},
    {path:'contact-us', loadComponent: ()=> import(`./components/contact-us/contact-us.component`).then((c)=> c.ContactUsComponent)}
];
