import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //type : string;

 fullname : string = "";
 secondname : string = "";
@Output() servercreated = new EventEmitter<{type : string, servername : string, servercontent : string}>();
  constructor() { }

  ngOnInit(): void {
  }
 
  myFunction(type){
    this.servercreated.emit({
      type:type,
      servername : this.fullname,
      servercontent : this.secondname
    })
 }
}

