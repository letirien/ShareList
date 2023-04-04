import { Component, Input } from '@angular/core';
import { Card } from '../models/card.model';
import { PresentService } from '../services/presents.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent  {

  @Input() present!: Card;

  constructor(private PresentService: PresentService){}

  onUpdateReview(el: 'for' | 'against'): void {
    if(el){      
      this.PresentService.voteById(this.present.id, el)
    }
  } 
}