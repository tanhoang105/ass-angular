import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { FormAddComponent } from './layout/admin/main/form-add/form-add.component';
import { FormEditComponent } from './layout/admin/main/form-edit/form-edit.component';
import { MainComponent } from './layout/admin/main/main.component';
import { ClientContactComponent } from './layout/client/client-contact/client-contact.component';
import { DetailProductComponent } from './layout/client/detail-product/detail-product.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';

const routes: Routes = [
    {
      path : '',
      component : HomePageComponent,  
          
    },
    {
      path : 'contact',
      component : ClientContactComponent
    },
    {
      path : 'admin',
      component : AdminComponent,
      children : [
        {
          path : '',
          component : MainComponent,
        },
        {
          path : 'edit',
          component : FormEditComponent
        }, 
        {
          path : 'add',
          component : FormAddComponent
        }, 
        
      ]
    },
    {
      path : 'detail',
      component : DetailProductComponent,
    }
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
