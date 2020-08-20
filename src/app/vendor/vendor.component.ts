import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  first : string;
  second : string;
  @Input() name:string;
 @Output() voted = new EventEmitter<boolean>();
 @Output() val_name = new EventEmitter<string>();
 @Output() clickval = new EventEmitter<{first_name : string, second_name : string}>();

 didvoted = false;
  constructor() { }

  vote(asigned : boolean){
    this.voted.emit(asigned);
    this.didvoted = true;
  }
  offvoted(){
    this.val_name.emit("Say Hello");
  }
  clickplus(){
    this.clickval.emit({
        first_name : this.first ,
        second_name : this.second
    })
  }
  ngOnInit(): void {
  }
 
}
