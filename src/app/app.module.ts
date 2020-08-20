import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ExperinceComponent } from './experince/experince.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { VendorComponent } from './vendor/vendor.component';
import { SuppliersComponent } from './suppliers/suppliers.component';



@NgModule({
  declarations: [
    AppComponent,
    ExperinceComponent,
    CockpitComponent,
    ServerElementComponent,
    VendorComponent,
    SuppliersComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
