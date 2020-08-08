import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { InnerContainerComponent } from './inner-container/inner-container.component';
import { LastContainerComponent } from './last-container/last-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    MainContainerComponent,
    InnerContainerComponent,
    LastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
