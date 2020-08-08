import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListComponent } from './components/search-list/search-list.component';

const routes: Routes = [
    {
        path: '',
        component: SearchListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class VideosRoutingModule {}
