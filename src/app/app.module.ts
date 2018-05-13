import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { ChartsModule } from 'ng2-charts';

import { EshopService } from './eshop.service';

import { AppComponent } from './app.component';
import { GameusComponent } from './gameus/gameus.component';
import { GameusDetailComponent } from './gameus-detail/gameus-detail.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GameusComponent,
    GameusDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImagesModule
  ],
  providers: [
    EshopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
