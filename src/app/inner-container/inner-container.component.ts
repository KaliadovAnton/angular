import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-container',
  templateUrl: './inner-container.component.html',
  styleUrls: ['./inner-container.component.scss']
})
export class InnerContainerComponent implements OnInit {


  @Input() array;
  @Output() eventFromInner = new EventEmitter<number>();
  number: number= 0;
  constructor() { }

  ngOnInit(): void {
  }
  eventChooseNumber(cipher) {
    this.number = cipher;
    this.eventFromInner.emit(this.number);
  }


}
