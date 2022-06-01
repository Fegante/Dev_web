import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  constructor(private loggedService: LoggedUserService) { }

  ngOnInit(): void {
    console.log("2");
    this.loggedService.user = {
      nome: 'Ezequiel',
      role: 'Produtor',
      isAuth: true,
      token: "###DDD"
    };
  }
}
