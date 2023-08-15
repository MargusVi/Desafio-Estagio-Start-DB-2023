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
            let pedido;
            let qtde;
            let confirmaPedido;
            let indexVirgula = element.indexOf(",");
            pedido = element.substr(0, indexVirgula);
            qtde = element.substr(indexVirgula + 1);
            if(qtde <= 0) {
                return "Quantidade inválida!"
            }
            for (let i = 0; i < codigo.length; i++) {
                if(codigo[i] == pedido)
                {
                    confirmaPedido = true;
                    precoTotal += qtde * valor[i];
                    break;
                } else {
                    confirmaPedido = false;
                }
            }
            if(confirmaPedido == false)
            {
                return "Item inválido!";
            }
        }
        precoTotal += (precoTotal * variacaoDePreco);
        precoTotal = String(precoTotal.toFixed(2));
        precoTotal = precoTotal.replace('.', ',');
        return `R$ ${precoTotal}`;
    }

}

export { CaixaDaLanchonete };
