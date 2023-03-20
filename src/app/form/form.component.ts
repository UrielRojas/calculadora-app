import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  operandoA: number;
  operandoB: number;

  //EventEmitter<Data type>
  @Output() SumResult = new EventEmitter<number>();
  
  sumar():void{
    //this.resultado = this.operandoA + this.operandoB;
    let result = this.operandoA + this.operandoB;
    this.SumResult.emit(result);
  }

}
