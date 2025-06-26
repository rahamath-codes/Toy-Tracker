import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgefilterPipe } from '../agefilter-pipe';
import { Toy } from '../toy';
import { Toys } from '../models/toys';
import { PricefilterPipe } from '../pricefilter-pipe';
@Component({
  selector: 'app-toy-list',
  imports: [FormsModule,CommonModule,AgefilterPipe,PricefilterPipe],
  templateUrl: './toy-list.html',
  styleUrl: './toy-list.css'
})
export class ToyList implements OnInit {
  selectedAgeRange: string = '';
  selectedPriceRange:string = '';
  public toys: Toy[] = []
  
  constructor(private toyService:Toys){}
  ngOnInit(): void {
      this.toys = this.toyService.getToys();
      console.log(this.toys)
  }
  markAsFavorite(name:string|null){
    const toy = this.toys.find(t => t.toyName == name);
     if (toy) {
         toy.isFavorite = !toy.isFavorite;
      }
  }
}
