import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { PresentService } from '../services/presents.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent {
  present!: Card
  constructor(private presentService: PresentService, private route : ActivatedRoute){}
  ngOnInit(): void {
    const presentId = + this.route.snapshot.params['id'];
    this.present = this.presentService.getPresent(presentId)
  }
}
