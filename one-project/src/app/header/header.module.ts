import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { CartComponent } from "../cart/cart.component";
import { LoginComponent } from "../login/login.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { FeedbackComponent } from "../product-detail/feedback/feedback.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductsComponent } from "../products/products.component";
import { LoginGuard } from "../shared/guards/login.guard";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [
      ProductDetailComponent,
      FeedbackComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: HeaderComponent,
          children: [
            {
                path: 'products',
                component: ProductsComponent,
                // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
                // children: [
                //   {
                //     path: ':id',
                //     component: ProductDetailComponent,
                //   },
                // ],
              },  
              {
                path: 'main',
                component: MainPageComponent,
              },
              {
                path: 'aboutus',
                component: AboutusComponent,
              },
              
              {
                path: 'products/:id',
                component: ProductDetailComponent,
                
              },
              {
                path: 'login',
                component: LoginComponent,
              },
              {
                path: 'cart',
                component: CartComponent,
                canActivate: [LoginGuard],
              },
          ]
        },
      ]),
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class HeaderModule { }