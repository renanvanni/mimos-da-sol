import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  abreOSobre = false;

  constructor() { }

  ngOnInit() { }

  abreSobreFoto() {
    this.abreOSobre ? this.abreOSobre = false : this.abreOSobre = true;
  }
}
