import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { SearchComponent } from './products/search/search.component';
import { LoginGuard } from './shared/guards/login.guard';
import { FeedbackComponent } from './product-detail/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailComponent,
    CustomPipe,
    SearchComponent,
    CartComponent,
    LoginComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full',
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
        path: 'products',
        component: ProductsComponent,
        // loadChildren: () => import('./products/products.module'),
        // children: [
        //   {
        //     path: ':id',
        //     component: ProductDetailComponent,
        //   },
        // ],
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
      {
        path: '**',
        redirectTo: '/main',
        pathMatch: 'full',
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
    CustomPipe,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
