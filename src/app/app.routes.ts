import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', loadComponent: ()=> import(`./components/home/home.component`).then((c)=> c.HomeComponent)},
    {path:'rooms', loadComponent: ()=> import(`./components/rooms/rooms.component`).then((c)=> c.RoomsComponent)},
    {path:'collections', loadComponent: ()=> import(`./components/collections/collections.component`).then((c)=> c.CollectionsComponent)},
    {path:'trends', loadComponent: ()=> import(`./components/trends/trends.component`).then((c)=> c.TrendsComponent)},
    {path:'our-items', loadComponent: ()=> import(`./components/items/items.component`).then((c)=> c.ItemsComponent)},
    {path:'products/:name', loadComponent: ()=> import(`./components/products/products.component`).then((c)=> c.ProductsComponent)},
    {path:'product-details/:id', loadComponent: ()=> import(`./components/product-details/product-details.component`).then((c)=> c.ProductDetailsComponent)}, 
    {path:'cart', loadComponent: ()=> import(`./components/cart/cart.component`).then((c)=> c.CartComponent)},
    {path:'register', loadComponent: ()=> import(`./components/register/register.component`).then((c)=> c.RegisterComponent)},
    {path:'login', loadComponent: ()=> import(`./components/login/login.component`).then((c)=> c.LoginComponent)},
    {path:'about-us', loadComponent: ()=> import(`./components/about-us/about-us.component`).then((c)=> c.AboutUsComponent)},
    {path:'contact-us', loadComponent: ()=> import(`./components/contact-us/contact-us.component`).then((c)=> c.ContactUsComponent)},
    {path:'search', loadComponent: ()=> import(`./components/search/search.component`).then((c)=> c.SearchComponent)},
    {path:'checkout', canActivate:[authGuard], loadComponent: ()=> import(`./components/checkout/checkout.component`).then((c)=> c.CheckoutComponent)},
    {path:'admin/register', loadComponent: ()=> import(`./components/admin-register/admin-register.component`).then((c)=> c.AdminRegisterComponent)},
    {path:'admin/login', loadComponent: ()=> import(`./components/admin-login/admin-login.component`).then((c)=> c.AdminLoginComponent)},
    {path:'dashboard', loadComponent: ()=> import(`./components/dashboard/dashboard.component`).then((c)=> c.DashboardComponent),
        children: [
            {path:'', redirectTo:'all-products', pathMatch:'full'},
            {path:'all-products', loadComponent: ()=> import(`./components/all-products-dashboard/all-products-dashboard.component`).then((c)=> c.AllProductsDashboardComponent)},
            {path:'sub-categories', loadComponent: ()=> import(`./components/all-sub-categories-dashboardd/all-sub-categories-dashboardd.component`).then((c)=> c.AllSubCategoriesDashboarddComponent)},
            {path:'main-categories', loadComponent: ()=> import(`./components/all-main-categories-dashboard/all-main-categories-dashboard.component`).then((c)=> c.AllMainCategoriesDashboardComponent)},
            {path:'add-product', loadComponent: ()=> import(`./components/add-product/add-product.component`).then((c)=> c.AddProductComponent)},
            {path:'update-product/:id', loadComponent: ()=> import(`./components/update-product/update-product.component`).then((c)=> c.UpdateProductComponent)},
            {path:'product-info/:id', loadComponent: ()=> import(`./components/product-info/product-info.component`).then((c)=> c.ProductInfoComponent)},
            {path:'add-main-category', loadComponent: ()=> import(`./components/add-main-category/add-main-category.component`).then((c)=> c.AddMainCategoryComponent)},  
            {path:'update-main-category/:id', loadComponent: ()=> import(`./components/update-main-category/update-main-category.component`).then((c)=> c.UpdateMainCategoryComponent)},
            {path:'add-sub-category', loadComponent: ()=> import(`./components/add-sub-category/add-sub-category.component`).then((c)=> c.AddSubCategoryComponent)}  
        ]
    },
];
