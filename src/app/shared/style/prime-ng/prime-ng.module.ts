import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ListboxModule } from 'primeng/listbox';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';

/* Extra */
import { RatingModule } from 'primeng/rating';
import { PickListModule } from 'primeng/picklist';
import { CarouselModule } from 'primeng/carousel';
import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    AutoCompleteModule,
    SliderModule,
    SidebarModule,
    ToastModule,
    CalendarModule,
    DialogModule,
    InputGroupModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ListboxModule,
    PaginatorModule,
    TooltipModule,
    TreeModule,
    DragDropModule,
    TableModule,
    ChipsModule,
    PanelModule,
    TabMenuModule,
    BadgeModule,

    /* Extra */
    RatingModule,
    PickListModule,
    CarouselModule,
    SplitterModule,
    FieldsetModule,
    FloatLabelModule,
    TagModule
  ],
  exports: [
    ButtonModule,
    AutoCompleteModule,
    SliderModule,
    SidebarModule,
    ToastModule,
    CalendarModule,
    DialogModule,
    InputGroupModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ListboxModule,
    PaginatorModule,
    TooltipModule,
    TreeModule,
    DragDropModule,
    TableModule,
    ChipsModule,
    PanelModule,
    TabMenuModule,
    BadgeModule,

    /* Extra */
    RatingModule,
    PickListModule,
    CarouselModule,
    SplitterModule,
    FieldsetModule,
    FloatLabelModule,
    TagModule
  ]
})
export class PrimeNgModule { }
