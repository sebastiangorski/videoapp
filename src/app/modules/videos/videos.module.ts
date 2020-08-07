import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchComponent } from './components/search-list/search/search.component';
import { ListComponent } from './components/search-list/list/list.component';
import { VideosRoutingModule } from './videos-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchListComponent, SearchComponent, ListComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatInputModule,
    MatIconModule
  ]
})
export class VideosModule { }
