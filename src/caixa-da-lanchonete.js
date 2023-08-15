class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const codigo = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"]; //Array com todos os códigos
        const valor = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5]; //Array com valores de cada index da array codigo
        let variacaoDePreco = 0;
        let precoTotal = 0;

        switch(metodoDePagamento) { //Testa se a forma de pagamento é válida e aplica o desconto ou acréscimo correspondente
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

        if(itens == '') { //Testa se não há itens sendo comprados
            return "Não há itens no carrinho de compra!";
        }

        for (const element of itens) {
            let pedido;
            let pedido2; //Variável usada para testar se o extra está sendo comprado sem o item principal
            let qtde;
            let confirmaPedido; //Booleana para validar o item pedido
            let extraSemPrincipal; //Booleana para validar se o extra está sendo comprado sem o item principal

            let indexVirgula = element.indexOf(","); //Encontra a vírgula em cada string da array itens e então separa o pedido e a quantidade
            pedido = element.substr(0, indexVirgula);
            qtde = element.substr(indexVirgula + 1);

            if(pedido == "chantily") { //Testa se o extra chantily está sendo comprado sem o café
                for (const element of itens) {
                    indexVirgula = element.indexOf(",");
                    pedido2 = element.substr(0, indexVirgula);
                    if(pedido2 == "cafe"){
                        extraSemPrincipal = false;
                        break;
                    } else {
                        extraSemPrincipal = true;
                    }
                }
            }

            if(pedido == "queijo") { //Testa se o extra queijo está sendo comprado sem o sanduíche
                for (const element of itens) {
                    indexVirgula = element.indexOf(",");
                    pedido2 = element.substr(0, indexVirgula);
                    if(pedido2 == "sanduiche"){
                        extraSemPrincipal = false;
                        break;
                    } else {
                        extraSemPrincipal = true;
                    }
                }
            }

            if(extraSemPrincipal == true) { //Testa se algum extra está sendo comprado sem o item principal
                return "Item extra não pode ser pedido sem o principal";
            }

            if(qtde <= 0) { //Testa se a quantidade de itens comprada é válida
                return "Quantidade inválida!"
            }

            for (let i = 0; i < codigo.length; i++) { //Testa se o código do pedido está correto e acrescenta o valor necessário
                if(codigo[i] == pedido)
                {
                    confirmaPedido = true;
                    precoTotal += qtde * valor[i];
                    break;
                } else {
                    confirmaPedido = false;
                }
            }

            if(confirmaPedido == false) { //Testa se houve algum código incorreto
                return "Item inválido!";
            }
        }

        precoTotal += (precoTotal * variacaoDePreco); //Aplica o desconto ou acréscimo de acordo com a forma de pagamento escolhida
        precoTotal = String(precoTotal.toFixed(2)); //Fixa o número de casas decimais em 2
        precoTotal = precoTotal.replace('.', ','); //Substitui .(ponto) por ,(vírgula)
        /*
            Poderia ter sido feito com precoTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
            Os resultados seriam os mesmos, porém seriam de tipo number e alguns resultados dariam uma diferença de 1 centavo
        pelo arredondamento.
        */

        return `R$ ${precoTotal}`; //Retorna o preço a pagar
    }

}

export { CaixaDaLanchonete };
