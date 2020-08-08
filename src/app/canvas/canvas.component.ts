import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvasEl') canvasEl: ElementRef;
  private context: CanvasRenderingContext2D;
  
  constructor() { }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
  
    this.draw();
  }

  private draw() {
    this.context.font = "30px Arial";
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText("adadad", x, y);
  }

  open() {
    window.open()
  }

}
