import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  array = [1, 2, 3, 4]
  number: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  eventFromInner(cipher){
    this.number = cipher;
  }
}
