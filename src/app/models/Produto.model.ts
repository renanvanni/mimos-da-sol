
export class Produto {
    url: string[] = [];
    preco: string = '';
    nomeProduto: string = '';
    tamanho: string = '';

    buildProduto(
        url: string[],
        preco: string,
        nomeProduto: string,
        tamanho: string
        ): Produto {
            this.url = url;
            this.preco = preco;
            this.nomeProduto = nomeProduto;
            this.tamanho = tamanho;
            return this;
        }

    constructor() {}
}