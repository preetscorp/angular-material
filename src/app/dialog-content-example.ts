import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: "dialog-content-example",
  templateUrl: "dialog-content-example.html"
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}
  text = new FormControl("", [Validators.required]);
  errorMsg: string;
  getText() {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogReply() {
    const dialogRef = this.dialog.open(ReplyDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "dialog-content-example-dialog.html"
})
export class DialogContentExampleDialog {}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "dialog-content-example-dialog.html"
})
export class ReplyDialog {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
