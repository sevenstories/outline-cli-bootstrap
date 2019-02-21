import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _hidden : BehaviorSubject<boolean> = new BehaviorSubject(false);
  hidden : Observable<boolean> = this._hidden.asObservable().pipe(share());

  constructor() { }

  toggle(val? : boolean){
    if(val !== undefined){
      this._hidden.next(val);
    } else {
      this._hidden.next(!this._hidden.value);
    }
  }

}
