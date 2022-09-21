import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public exemplomodel: Produto[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.exemplomodel = [
      // item 1
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25302.jpg", "../../assets/img/itens-catalogo/msg541852549-25303.jpg"],
        '20.01', "Produto 1", "45x70cm"
      ),
      // item 2
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25300.jpg", "../../assets/img/itens-catalogo/msg541852549-25301.jpg"],
        'R$ 30.02', "Produto 2", "45x70cm"
      ),
      // item 3
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25270.jpg", "../../assets/img/itens-catalogo/msg541852549-25271.jpg", "../../assets/img/itens-catalogo/toalha-1.jpg"],
        'R$ 30.03', "Produto 3", "45x70cm"
      ),
      // item 4
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25299.jpg"],
        'R$ 30.04', "Produto 4", "45x70cm"
      ),
      // item 5
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25286.jpg", "../../assets/img/itens-catalogo/msg541852549-25285.jpg"],
        'R$ 30.05', "Produto 5", "45x70cm"
      ),
      // item 6
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25290.jpg"],
        'R$ 30.06', "Produto 6", "45x70cm"
      ),
      // item 7
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25291.jpg"],
        'R$ 30.07', "Produto 7", "45x70cm"
      ),
      // item 8
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25289.jpg"],
        'R$ 30.08', "Produto 8", "45x70cm"
      ),
      // item 9
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25294.jpg", "../../assets/img/itens-catalogo/photo1643977675.jpeg", "../../assets/img/itens-catalogo/photo1643977676.jpeg"],
        'R$ 30.09', "Produto 9", "45x70cm"
      ),
      // item 10
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25292.jpg", "../../assets/img/itens-catalogo/photo1643977678.jpeg", "../../assets/img/itens-catalogo/photo1643977679.jpeg"],
        'R$ 30.10', "Produto 10", "45x70cm"
      ),
      // item 11
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25295.jpg", "../../assets/img/itens-catalogo/msg541852549-25296.jpg"],
        'R$ 30.11', "Produto 11", "45x70cm"
      ),
      // item 12
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25298.jpg"],
        'R$ 30.12', "Produto 12", "45x70cm"
      ),
      // item 13
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25278.jpg", "../../assets/img/itens-catalogo/msg541852549-25277.jpg"],
        'R$ 30.13', "Produto 13", "45x70cm"
      ),
      // item 14
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg541852549-25284.jpg", "../../assets/img/itens-catalogo/msg541852549-25283.jpg"],
        'R$ 30.14', "Produto 14", "45x70cm"
      ),
      // item 15
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977642.jpeg", "../../assets/img/itens-catalogo/photo1643977643.jpeg", 
        "../../assets/img/itens-catalogo/photo1644344375.jpeg", "../../assets/img/itens-catalogo/photo1644344376.jpeg", 
        "../../assets/img/itens-catalogo/photo1644344377.jpeg", "../../assets/img/itens-catalogo/photo1644344378.jpeg", 
        "../../assets/img/itens-catalogo/photo1644344379.jpeg", "../../assets/img/itens-catalogo/photo1644344380.jpeg", 
        "../../assets/img/itens-catalogo/photo1644344393.jpeg"],
        'R$ 30.15', "Produto 15", "45x70cm"
      ),
      // item 16
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977665.jpeg", "../../assets/img/itens-catalogo/photo1643977666.jpeg",
        "../../assets/img/itens-catalogo/photo1643977667.jpeg", "../../assets/img/itens-catalogo/photo1643977693.jpeg",
        "../../assets/img/itens-catalogo/photo1643977694.jpeg"],
        'R$ 30.16', "Produto 16", "45x70cm"
      ),
      // item 17
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977668.jpeg", "../../assets/img/itens-catalogo/photo1643977669.jpeg", 
        "../../assets/img/itens-catalogo/photo1643977691.jpeg", "../../assets/img/itens-catalogo/photo1643977692.jpeg"],
        'R$ 30.17', "Produto 17", "45x70cm"
      ),
      // item 18
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977671.jpeg", "../../assets/img/itens-catalogo/photo1643977670.jpeg"],
        'R$ 30.18', "Produto 18", "45x70cm"
      ),
      // item 19
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977674.jpeg", "../../assets/img/itens-catalogo/photo1643977673.jpeg"],
        'R$ 30.19', "Produto 19", "45x70cm"
      ),
      // item 20
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977681.jpeg", "../../assets/img/itens-catalogo/photo1643977680.jpeg", "../../assets/img/itens-catalogo/photo1643977682.jpeg"],
        'R$ 30.20', "Produto 20", "45x70cm"
      ),
      // item 21
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1646183502.jpeg", "../../assets/img/itens-catalogo/photo1646183503.jpeg"],
        'R$ 30.21', "Produto 21", "45x70cm"
      ),
      // item 22
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1643977684.jpeg", "../../assets/img/itens-catalogo/photo1643977685.jpeg", 
        "../../assets/img/itens-catalogo/photo1643977686.jpeg", "../../assets/img/itens-catalogo/photo1643977687.jpeg", 
        "../../assets/img/itens-catalogo/photo1643977688.jpeg", "../../assets/img/itens-catalogo/photo1643977689.jpeg",
        "../../assets/img/itens-catalogo/photo1643977690.jpeg"],
        'R$ 30.22', "Produto 22", "45x70cm"
      ),
      // item 23
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/photo1646183504.jpeg", "../../assets/img/itens-catalogo/photo1646183505.jpeg", "../../assets/img/itens-catalogo/photo1646183506.jpeg"],
        'R$ 30.23', "Produto 23", "45x70cm"
      ),
      // item 24
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg577788063-25425.jpg", "../../assets/img/itens-catalogo/msg577788063-25426.jpg", "../../assets/img/itens-catalogo/msg577788063-25427.jpg",
        "../../assets/img/itens-catalogo/msg577788063-25429.jpg", "../../assets/img/itens-catalogo/msg577788063-25434.jpg", "../../assets/img/itens-catalogo/msg577788063-25440.jpg",
        "../../assets/img/itens-catalogo/msg577788063-25441.jpg", "../../assets/img/itens-catalogo/msg577788063-25442.jpg", "../../assets/img/itens-catalogo/msg577788063-25443.jpg",
        "../../assets/img/itens-catalogo/msg577788063-25444.jpg", "../../assets/img/itens-catalogo/msg577788063-25445.jpg"],
        'Kit com 3 peças R$ 68.90', "Potes de Mel", "45x69cm"
      ),
      // item 25
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg577788063-25446.jpg", "../../assets/img/itens-catalogo/msg577788063-25447.jpg", "../../assets/img/itens-catalogo/msg577788063-25448.jpg"],
        'Kit com 2 peças R$ 46.90', "Compotas", "45x69cm"
      ),
      // item 26
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg577788063-25449.jpg"],
        'Kit com 3 peças R$ 68.90', "Compotas", "45x69cm"
      ),
      // item 27
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg577788063-25436.jpg", "../../assets/img/itens-catalogo/msg577788063-25437.jpg"],
        'Kit com 3 peças R$ 68.90', "Produto 27", "45x69cm"
      ),
      // item 28
      new Produto().buildProduto(
        ["../../assets/img/itens-catalogo/msg577788063-25430.jpg", "../../assets/img/itens-catalogo/msg577788063-25431.jpg", "../../assets/img/itens-catalogo/msg577788063-25432.jpg",
        "../../assets/img/itens-catalogo/msg577788063-25433.jpg"],
        'Kit com 3 peças R$ 68.90', "Produto 28", "45x69cm"
      ),
    ];
  }

  passarDados(produto: Produto) {
    this.router.navigate(["/item-1"], {
      queryParams: {
        'nomeProduto': produto.nomeProduto,
        'preco': produto.preco,
        'url': produto.url,
        'tamanho': produto.tamanho
      }
    });
  }

}
