import { Component, OnInit } from '@angular/core';
import { interval, map,filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>

  ngOnInit(): void {
    // we have to use HTPP client and intervals to fetch data
    // this.interval$ = interval(1000).pipe(
    //   //Opérateur bas niveau
    //   filter(value => value % 2 === 0),
    //   map(value => value > 50 ? 'trop grande valeur': "je m'arrete a 50: " + value),
    //   tap(text => this.logger(text))
    // );
  }
  // logger(text:string){
  //   console.log('log ' + text);
    
  // }
  
  
  // fetch("https://api.airtable.com/v0/appTE72qZSTNVsNrL/projects?maxRecords=100&view=Grid%20view", {
  //   headers: {
  //     'Content-type': 'application/json',
  //     'Authorization': `Bearer key9a1KxVxfytXi0P`, // notice the Bearer before your token
  //   },

  // })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       firstEl.value = data.records[0].fields.Name
  //       data.records.map(e => {
  //         projects.value.push(e.fields)
  //         clone.value.push(e.fields)
  //         load.value = false

  //       })
  //     })
}
