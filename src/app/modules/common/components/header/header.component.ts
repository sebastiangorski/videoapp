import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { WarningPopupComponent } from '../popups/warning-popup/warning-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private listService: ListService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWarningPopup(): void {
    const dialogRef = this.matDialog.open(WarningPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      // Result potwierdza wyczyszczenie arejki z filmami
    });
  }

  setListToList(): void {
    this.listService.setListDisplayStyle(false);
  }

  setListToGrid(): void {
    this.listService.setListDisplayStyle(true);
  }

}
