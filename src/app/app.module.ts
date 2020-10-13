import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FilterCompComponent } from './filter-comp/filter-comp.component';
import { ListCompComponent } from './list-comp/list-comp.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    FilterCompComponent,
    ListCompComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// "../node_modules/jquery/dist/jquery.min.js",
//               "../node_modules/bootstrap/dist/js/bootstrap.min.js"