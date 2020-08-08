import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchComponent } from './components/search-list/search/search.component';
import { ListComponent } from './components/search-list/list/list.component';
import { VideosRoutingModule } from './videos-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchListComponent, SearchComponent, ListComponent],
    imports: [
        CommonModule,
        VideosRoutingModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatPaginatorModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class VideosModule { }
