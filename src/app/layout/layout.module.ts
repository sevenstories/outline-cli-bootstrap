import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'

@NgModule({
  declarations: [MainComponent, NavigationComponent, HeaderComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [MainComponent, NavigationComponent, BrowserAnimationsModule, HeaderComponent, BreadcrumbsComponent]
})
export class LayoutModule { }
