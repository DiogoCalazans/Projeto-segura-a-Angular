import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email = '';
  senha = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  entrar() {
    this.authService.login({
      email: this.email,
      senha: this.senha
    }).subscribe({
      next: (res: any) => {
        console.log('Resposta da API:', res);
        this.authService.salvarToken(res.access_token);
        this.router.navigate(['/epi']);
      },
      error: () => {
        console.log('Erro no login');
      }
    });
  }
}