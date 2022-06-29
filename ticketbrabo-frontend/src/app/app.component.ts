import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketbrabo-frontend';
  visible = true;
  eventos!: any;
  constructor() { }

  ngOnInit(): void {
    
  }
}
