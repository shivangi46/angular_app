import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.textcolor{color : white;}']
})
export class AppComponent {
  title = 'my-dream-app';
  showsecrete = false;
  log =[];

  onToggle(){
    this.showsecrete = !this.showsecrete;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
