import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
const routes: Routes = [
  {path:'',component:FirstpageComponent},
  {path:'home', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path:'error',component:ErrorpageComponent},
  {path:'**',component:NotfoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
