import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación Calculadora';
  
  resultFather: number;


  buildResult(result:number){
    this.resultFather = result;

  }
}
