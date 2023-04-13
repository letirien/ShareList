import { Component, OnInit} from '@angular/core';
import { Card } from '../models/card.model';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.scss']
})
export class AddWishComponent implements OnInit {
  present!:Card
  title!: String
  description!: String
  price!: Number
  link!: String
  img!: String

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
    
  }
}
