import { Component, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent  {

  @Input() card!: Card;

  onUpdateReview(el:String): void {
    if(el === "for"){
      console.log(this.card.review);
      
      this.card.review.for.count ++
    }else{
      this.card.review.against.count ++
    } 
  }
}
