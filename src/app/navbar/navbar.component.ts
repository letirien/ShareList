import { Component } from '@angular/core';
import { OnInit}  from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  openMenu!: boolean
  routerInfo!:String
  constructor(private route : ActivatedRoute){}
  ngOnInit(): void {
    this.openMenu = false
    this.routerInfo = window.location.href
    console.log(this.routerInfo);
    
  }

}
