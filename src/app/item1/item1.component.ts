import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  public exemplomodel: Produto = new Produto();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.exemplomodel.nomeProduto = params['nomeProduto'];
        this.exemplomodel.preco = params['preco'];
        this.exemplomodel.url = params['url'];
        this.exemplomodel.tamanho = params['tamanho'];
      }
    });
  }

}