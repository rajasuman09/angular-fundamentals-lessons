import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{carItem.make}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{carItem.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{carItem.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{carItem.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>{{carItem.price}}</span>
          </p>
        </section>
        <button (click)="handleAddCar()">Add</button>
      </article>
  `,
  styles: ``,
})
export class ListingComponent { 
  @Input() carItem!: Car;
  @Output() addCar = new EventEmitter<Car>();
  handleAddCar(){
    return  this.addCar.emit(this.carItem);
  }
}