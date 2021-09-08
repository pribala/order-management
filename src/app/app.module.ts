import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersModule } from './orders/orders.module';
import { GenericErrorModule } from './generic-error/generic-error.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    GenericErrorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
