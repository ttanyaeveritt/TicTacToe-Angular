import { Component, Input } from '@angular/core';

@Component({ //decorator --- allow pass in an object that config the way this component behaves
  selector: 'app-square', //name of component
  template: `
    
      <button nbButton *ngIf="!value">{{ value }}</button>
      <button nbButton hero status="success" *ngIf="value=='X'">{{ value }}</button>
      <button nbButton hero status="info" *ngIf="value=='O'">{{ value }}</button>
    
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  
  @Input() value: 'X'|'O'; //called a dumb componenet - nothing in this component that can modify itself but the parent can; easy to test

}

// export class SquareComponent implements OnInit{} ---- lifehook --- runs code when component is first initailised
