import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
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
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';

/* Extra */
import { RatingModule } from 'primeng/rating';
import { PickListModule } from 'primeng/picklist';
import { CarouselModule } from 'primeng/carousel';
import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    SliderModule,
    SidebarModule,
    ToastModule,
    CalendarModule,
    DialogModule,
    InputGroupModule,
    SelectButtonModule,
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
    TabViewModule,
    BadgeModule,
    CheckboxModule,

    /* Extra */
    RatingModule,
    PickListModule,
    CarouselModule,
    SplitterModule,
    FieldsetModule,
    FloatLabelModule,
    TagModule,
    RippleModule,
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    SliderModule,
    SidebarModule,
    ToastModule,
    CalendarModule,
    DialogModule,
    InputGroupModule,
    SelectButtonModule,
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
    TabViewModule,
    BadgeModule,
    CheckboxModule,

    /* Extra */
    RatingModule,
    PickListModule,
    CarouselModule,
    SplitterModule,
    FieldsetModule,
    FloatLabelModule,
    TagModule,
    RippleModule,
  ]
})
export class PrimeNgModule { }
