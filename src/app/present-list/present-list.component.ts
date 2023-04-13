import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { PresentService } from '../services/presents.service';
import { Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.scss']
})
export class PresentListComponent implements OnInit, OnDestroy {
  presents!: Card[]
  private destroy$!: Subject<boolean>

  // Angular injecte automatiquement le service si on le passe dans le constructeur de cette manière 
  // Injection de dépendances (DI)
  constructor(private presentService: PresentService){

  }
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>
    this.presents = this.presentService.getAllPresents()

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }
}
