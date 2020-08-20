import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  fname : string;
  sname : string;
  plus = 0;
  minus = 0;
  voters = ["abc", "def", "ghi"];
  appval : string;
  clickavail = [{fname: "", sname : ""}];
  onvoted(aggreed : boolean){ 
    aggreed ? this.plus++ : this.minus++;
  }
  catchvalue(data: string){
    this.appval = data;
  }
  onclickassign(subvalue : {first_name : string, second_name : string }){
    this.clickavail.push({
      fname : subvalue.first_name,
      sname : subvalue.second_name
    });
      
  }
  constructor() { }

  ngOnInit(): void {
  }

}
