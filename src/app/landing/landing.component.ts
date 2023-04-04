import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Créer un component Auth avec Login et Create and Logout account methods
  // with Auth models and Auth Service 

  constructor(private router: Router){}
  onLogin(): void{
    // method a mettre dans le service Auth
    // check form 
    // and if valid 
    // redirect
    // this.router.navigateByUrl("sharelist")
  }
}
