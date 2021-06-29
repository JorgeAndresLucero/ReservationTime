import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import {SliderModule } from 'primeng/slider';
import { ListboxModule} from 'primeng/listbox';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    DialogModule,
    MenubarModule,
    PanelMenuModule,
    ToastModule,
    SliderModule, 
    ListboxModule
  ]
})
export class PrimeNgModule { }
