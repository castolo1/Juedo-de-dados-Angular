import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common'; // Importa NgIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DadosAngular';
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice6.png';
  numero1: number = 1;
  numero2: number = 6;

  tirarDados(): void{
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;
    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
  } 
}
