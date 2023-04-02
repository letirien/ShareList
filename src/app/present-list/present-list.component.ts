import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { PresentService } from '../services/presents.service';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.scss']
})
export class PresentListComponent implements OnInit {
  presents!: Card[]

  // Angular injecte automatiquement le service si on le passe dans le constructeur de cette manière 
  // Injection de dépendances (DI)
  constructor(private presentService: PresentService){

  }
  ngOnInit(): void {
    this.presents = this.presentService.presents
}
}
