import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SlideComponent } from './layout/client/slide/slide.component';

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
    SlideComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
