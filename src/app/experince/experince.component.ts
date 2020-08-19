import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experince',
  templateUrl: './experince.component.html',
  styleUrls: ['./experince.component.css']
})
export class ExperinceComponent implements OnInit {
 servers  = [{type : 'server', name : 'abcd', content : "Task completed"}];
  // heroes = HEROES;
  // master = "Master";
  //Display_value = "Chintan";
  onserverAdded(serverData : {type : string, servername : string, servercontent : string}){
        this.servers.push({
          type : serverData.type,
          name : serverData.servername,
          content : serverData.servercontent
        });
  }
 
  constructor() { }

  ngOnInit(): void {
  }


  
// mysecFunction(){
//   this.servers.push({
//     type:'blueprint',
//     name : this.fullname,
//     content : this.secondname
//   });
// }
}

 

