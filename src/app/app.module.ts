import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// PrimeNg
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { SliderComponent } from './components/slider/slider.component';
import { ListboxComponent } from './components/listbox/listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ListboxComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    PrimeNgModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
