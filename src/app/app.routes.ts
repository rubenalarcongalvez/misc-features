import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AutocompleteComponent } from './views/autocomplete/autocomplete.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { ChipsComponent } from './views/chips/chips.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { DragDropComponent } from './views/drag-drop/drag-drop.component';
import { FieldsetComponent } from './views/fieldset/fieldset.component';
import { ButtonGroupComponent } from './views/button-group/button-group.component';
import { ListboxComponent } from './views/listbox/listbox.component';
import { PaginatorComponent } from './views/paginator/paginator.component';
import { PanelComponent } from './views/panel/panel.component';
import { ProgressBarComponent } from './views/progress-bar/progress-bar.component';
import { RatingComponent } from './views/rating/rating.component';
import { SliderComponent } from './views/slider/slider.component';
import { SplitterComponent } from './views/splitter/splitter.component';
import { TabMenuComponent } from './views/tab-menu/tab-menu.component';
import { TableComponent } from './views/table/table.component';
import { ToastComponent } from './views/toast/toast.component';
import { TreeComponent } from './views/tree/tree.component';
import { TooltipComponent } from './views/tooltip/tooltip.component';
import { BadgeComponent } from './views/badge/badge.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    
    {path: 'autocomplete', component: AutocompleteComponent},
    {path: 'badge', component: BadgeComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'carousel', component: CarouselComponent},
    {path: 'chips', component: ChipsComponent},
    {path: 'dialog', component: DialogComponent},
    {path: 'drag-drop', component: DragDropComponent},
    {path: 'fieldset', component: FieldsetComponent},
    {path: 'button-group', component: ButtonGroupComponent},
    {path: 'listbox', component: ListboxComponent},
    {path: 'paginator', component: PaginatorComponent},
    {path: 'panel', component: PanelComponent},
    {path: 'progress-bar', component: ProgressBarComponent},
    {path: 'rating', component: RatingComponent},
    {path: 'slider', component: SliderComponent},
    {path: 'splitter', component: SplitterComponent},
    {path: 'tab-view', component: TabMenuComponent},
    {path: 'table', component: TableComponent},
    {path: 'toast', component: ToastComponent},
    {path: 'tooltip', component: TooltipComponent},
    {path: 'tree', component: TreeComponent},

    {path: '**', redirectTo: ''}
];
