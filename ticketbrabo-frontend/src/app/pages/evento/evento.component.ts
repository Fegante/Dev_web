import { Component, OnInit } from '@angular/core';
import { AuthNotificationService } from 'src/app/shared/services/auth-notification.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  constructor(private authNotificationService: AuthNotificationService) { }

  ngOnInit(): void {
    this.authNotificationService.user = {
      nome: 'Ezequiel',
      role: 'Produtor',
      isAuth: true,
      token: "###DDD"
    };
  }
}
