import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toy } from '../toy';
@Injectable({
  providedIn: 'root'
})
export class Toys {
private toysSubject = new BehaviorSubject<Toy[]>([]);

  getToys(){
    return this.toysSubject.getValue();
  }

  addToy(newToy: Toy) {
    const currentToys = this.toysSubject.getValue();
    this.toysSubject.next([...currentToys, newToy]);
  }
}
