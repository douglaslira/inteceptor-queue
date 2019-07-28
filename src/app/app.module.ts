import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataService } from './data.service';
import { CompService } from './component-one/component-one.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { ComponentOneComponent } from './component-one/component-one.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';

import { QueueInterceptor } from './interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QueueInterceptor,
      multi: true
    },
    DataService,
    CompService
  ],
  declarations: [
    RouteOneComponent, 
    RouteTwoComponent,
    AppComponent, 
    ComponentOneComponent, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
