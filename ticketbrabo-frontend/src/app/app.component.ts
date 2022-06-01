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
  constructor(
    private httpclient: HttpClient
  ) { }

  ngOnInit(): void {
    //setInterval(() => this.visible = false, 2000);
    this.httpclient.get('http://localhost:3000/api/evento/query')
    .subscribe((data) => {
      this.eventos = data;
      console.log(data)
    })
  }
}
