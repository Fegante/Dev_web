import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketbrabo-frontend';
  visible = true;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.visible = false, 2000);
  }
}
