import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
