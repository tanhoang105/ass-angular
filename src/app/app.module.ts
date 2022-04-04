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
import { FormEditComponent } from './layout/admin/main/form-edit/form-edit.component';
import { FormAddComponent } from './layout/admin/main/form-add/form-add.component';
import { ClientHeaderComponent } from './layout/client/client-header/client-header.component';
import { ClientMainComponent } from './layout/client/client-main/client-main.component';
import { ClientFooterComponent } from './layout/client/client-footer/client-footer.component';
import { ClientSlideComponent } from './layout/client/client-slide/client-slide.component';
import { ProductService } from './service/product.service';
import { SlideService } from './service/slide.service';
import { ClientContactComponent } from './layout/client/client-contact/client-contact.component';

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
    FormEditComponent,
    FormAddComponent,
    ClientHeaderComponent,
    ClientMainComponent,
    ClientFooterComponent,
    ClientSlideComponent,
    ClientContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ProductService , SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
