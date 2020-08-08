import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  array = [1, 2, 3, 4]
  number: number = 0;
  message: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  eventFromInner(cipher){
    this.number = cipher;
  }
  onNameKeyUp(event: any){
    this.message = event.target.value;
  }
  getDemo(){
    this.httpClient
    .get(`https://restcountries.eu/rest/v2/name/${this.message}`)
    .subscribe((data)=> console.log(data[0]));
  }
}
