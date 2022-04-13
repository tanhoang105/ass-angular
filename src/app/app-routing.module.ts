import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AdminProductSpecicalComponent } from './layout/admin/main/admin-product-specical/admin-product-specical.component';
import { AdminSliceComponent } from './layout/admin/main/admin-slice/admin-slice.component';
import { FormAddComponent } from './layout/admin/main/form-add/form-add.component';
import { MainComponent } from './layout/admin/main/main.component';
import { ClientContactComponent } from './layout/client/client-contact/client-contact.component';
import { ClientMainComponent } from './layout/client/client-main/client-main.component';
import { DetailProductComponent } from './layout/client/detail-product/detail-product.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';
import { ProductSpecicalComponent } from './layout/client/products/product-specical/product-specical.component';
import { ProductsDefaultComponent } from './layout/client/products/products-default/products-default.component';
import { ProductsSimilarComponent } from './layout/client/products/products-similar/products-similar.component';
import { ProductsComponent } from './layout/client/products/products.component';

const routes: Routes = [
    {
      path : '',
      component : HomePageComponent,  
      children : [
        {
          path : '',
          component : ClientMainComponent,     
        },
        {
          path : 'product',
          component : ProductsComponent,
          children : [
            {
              path : '',
              component : ProductsDefaultComponent

            },
            {
              path : 'product-specical',
              component : ProductSpecicalComponent

            },
            {
              path : 'product-similar',
              component : ProductsSimilarComponent

            }
          ]
               
        },
        {
          path : 'contact',
          component : ClientContactComponent,     
        },
        {
          path : ':id/detail',
          component : DetailProductComponent,
        },
        {
          path : ':id/detail_specical',
          component : DetailProductComponent,
        },
        {
          path : ':id/detail_similar',
          component : DetailProductComponent,
        }

      ]
          
    },
    // {
    //   path : 'contact',
    //   component : ClientContactComponent
    // },
    // {
    //   path : 'product',
    //   component : ProductsComponent
    // },
    {
      path : 'admin',
      component : AdminComponent,
      children : [
        {
          path : '',
          component : MainComponent,
        },
        {
          path : ':id/edit',
          component : FormAddComponent

        },
        {
          path : 'add',
          component : FormAddComponent
        }, 
        {
          path : 'slice',
          component : AdminSliceComponent
        },
        {
          path : 'productSpecical',
          component : AdminProductSpecicalComponent
        },
      ]
    },
    
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
