import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './layout/admin/admin.component';
import { DetailProductComponent } from './layout/client/detail-product/detail-product.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';
import { AsideComponent } from './layout/admin/silder-bar/aside/aside.component';
import { HeaderComponent } from './layout/admin/header/header.component';
import { FooterComponent } from './layout/admin/footer/footer.component';
import { MainComponent } from './layout/admin/main/main.component';
import { FormAddComponent } from './layout/admin/main/form-add/form-add.component';
import { ClientHeaderComponent } from './layout/client/client-header/client-header.component';
import { ClientMainComponent } from './layout/client/client-main/client-main.component';
import { ClientFooterComponent } from './layout/client/client-footer/client-footer.component';
import { ClientSlideComponent } from './layout/client/client-slide/client-slide.component';
import { ProductService } from './service/product.service';
import { SlideService } from './service/slide.service';
import { ClientContactComponent } from './layout/client/client-contact/client-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './layout/client/search/search.component';
import { ProductsComponent } from './layout/client/products/products.component';
import { AdminSliceComponent } from './layout/admin/main/admin-slice/admin-slice.component';
import { AdminProductSpecicalComponent } from './layout/admin/main/admin-product-specical/admin-product-specical.component';
import { ProductSpecicalComponent } from './layout/client/products/product-specical/product-specical.component';
import { ProductsDefaultComponent } from './layout/client/products/products-default/products-default.component';
import { ProductSpecicalService } from './service/product-specical.service';
import { ShowValidateComponent } from './layout/admin/component/show-validate/show-validate.component';
import { StatusComponent } from './layout/admin/component/status/status.component';
import { ProductsSimilarComponent } from './layout/client/products/products-similar/products-similar.component';
import { ProductSimilarService } from './service/product-similar.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailProductComponent,
    HomePageComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormAddComponent,
    ClientHeaderComponent,
    ClientMainComponent,
    ClientFooterComponent,
    ClientSlideComponent,
    ClientContactComponent,
    SearchComponent,
    ProductsComponent,
    AdminSliceComponent,
    AdminProductSpecicalComponent,
    ProductSpecicalComponent,
    ProductsDefaultComponent,
    ShowValidateComponent,
    ProductsSimilarComponent,
    StatusComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService , SlideService , ProductSpecicalService,ProductSimilarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
