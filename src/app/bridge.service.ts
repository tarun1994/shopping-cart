import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  cat:string="Popular";

  category: BehaviorSubject<string>;
  //currentCategory = this.category.asObservable();
  constructor() { 
    this.category  = new BehaviorSubject(this.cat);
  }
  nextCategory(selected:string) {
    this.category.next(selected);
  }
}
