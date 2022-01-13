import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HistoryPageComponent } from '@modules/history/pages/history-page/history-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ // declaraciones, componentes, directivas, pipes
    AppComponent, /* HistoryPageComponent */
  ],
  imports: [  // solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
