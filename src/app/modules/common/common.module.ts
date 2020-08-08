import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InfoPopupComponent } from './components/popups/info-popup/info-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WarningPopupComponent } from './components/popups/warning-popup/warning-popup.component';



@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent,
      InfoPopupComponent,
      WarningPopupComponent
  ],
    entryComponents: [
       InfoPopupComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class AppCommonModule { }
