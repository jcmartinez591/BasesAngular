import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string= 'Contador App';
  numero:number=0;
  base:number=5;

  suma(valor:number){
    this.numero +=valor;
  }
  
}
