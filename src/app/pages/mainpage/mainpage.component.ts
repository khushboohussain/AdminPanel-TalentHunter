import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
package=false;
  constructor() { }

  ngOnInit() {
  }
packages(){
  this.package=true;
}
}
