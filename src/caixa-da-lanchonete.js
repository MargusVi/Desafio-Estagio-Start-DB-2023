class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const codigo = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
        const valor = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];
        let variacaoDePreco = 0;
        let precoTotal = 0;
        switch(metodoDePagamento) {
            case "dinheiro":
                variacaoDePreco = -0.05;
                break;
            case "debito":
                variacaoDePreco = 0;
                break;
            case "credito":
                variacaoDePreco = 0.03; 
                break;
            default:
                return "Forma de pagamento inválida!"
        }

        if(itens == '') {
            return "Não há itens no carrinho de compra!";
        }

        for (const element of itens) {
            let pedido = 'a';
            let qtde = '0';
            let indexVirgula = element.indexOf(",");
            pedido = element.substr(0, indexVirgula - 1);
            qtde = element.substr(indexVirgula + 1);
            if(qtde <= 0) {
                return "Quantidade inválida!"
            }
            for (let i = 0; i < codigo.length; i++) {
                if(pedido == codigo[i])
                {
                    precoTotal = qtde * valor[i];
                    precoTotal += (precoTotal * variacaoDePreco);
                } else {
                    return "Item inválido!";
                }
            }
        }
        return `R$ ${precoTotal.toFixed(2)}`;
    }

}

export { CaixaDaLanchonete };
