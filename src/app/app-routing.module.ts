import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ContainerComponent } from './dashboard/components/container/container.component';
import { HeaderComponent } from './layout/header/header.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        component:ContainerComponent
      },
      {
        path:'',
        component:HeaderComponent,
        outlet:'heading'
      },
      {
        path:'',
        component:BreadcrumbsComponent,
        outlet:'breadcrumbs'
      },
      {
        path:'',
        component:NavigationComponent,
        outlet:'navigation'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
