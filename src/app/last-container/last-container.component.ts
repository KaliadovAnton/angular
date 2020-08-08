import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-last-container',
  templateUrl: './last-container.component.html',
  styleUrls: ['./last-container.component.scss']
})
export class LastContainerComponent implements OnInit {


  @Input() array: number[];
  @Input() cipher: number;
  @Output() eventChooseNumber = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  chooseThisNumber(){
    this.eventChooseNumber.emit(this.cipher)   
  }
}
