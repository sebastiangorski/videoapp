import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoPopupComponent } from '../../../../common/components/popups/info-popup/info-popup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputForm: FormGroup;

  constructor(public matDialog: MatDialog,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      input: ['', Validators.required]
    });
  }

  openInfoPopup(): void {
    this.matDialog.open(InfoPopupComponent);
  }

  onSubmit(): void {
    console.log(this.inputForm.value);
  }
}
