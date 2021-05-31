import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario.model';
import { ApiAuthService } from './services/api-auth.service';

// test para probar github

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registros-app';
  usuario!: Usuario;

  constructor(public AuthService: ApiAuthService, private router: Router) {
    this.AuthService.usuario.subscribe(res => {
      this.usuario = res;
      console.log("cambió el objeto: " + res);
    })
  }

  logout() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}
