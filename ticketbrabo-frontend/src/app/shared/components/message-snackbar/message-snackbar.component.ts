import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-snackbar',
  templateUrl: './message-snackbar.component.html',
  styleUrls: ['./message-snackbar.component.css']
})
export class MessageSnackbarComponent implements OnInit {
  @Input()
  durationInSeconds = 5;

  snackBarText!: string;

  constructor(private _snackBar: MatSnackBar, private messageService: MessageService) { 
  }

  openSnackBar() {
    this._snackBar.open(this.snackBarText, undefined, {duration: this.durationInSeconds * 1000});
  }

  ngOnInit(): void {
    this.messageService.messageToShow
    .subscribe((message) => {
      this.snackBarText = message;
      this.openSnackBar();
    });
  }

}
