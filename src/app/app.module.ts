import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter.reducer";
import { AppComponent } from './app.component';
@NgModule({
  imports: [BrowserModule,
  StoreModule.forRoot(
    {count:counterReducer}
    )],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


 