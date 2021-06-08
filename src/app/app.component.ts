import { Component } from '@angular/core';
import { Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as actions from "./counter.action";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  count$ :Observable<number>
  constructor(private store:Store<{count:number}>){
      this.count$ = store.select("count");
  }

  incr(){
    this.store.dispatch(actions.increase());
  }

  decr(){
    this.store.dispatch(actions.decrease());
  }

  reset(){
    this.store.dispatch(actions.reset());
  }

  set(){
    this.store.dispatch(actions.setCustom({val:200}))
  }


}


 