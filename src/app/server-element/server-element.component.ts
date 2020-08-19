import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
@Input() serverapp : { type: string, name : string, content: string }
// @Input() hero : Hero;
// @Input('master') mastername : string; 



  constructor() { }

  ngOnInit(): void {
  }

}
