class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let variacaoDePreco = 0;
        switch(metodoDePagamento) {
            case "dinheiro":
                variacaoDePreco = -0.05;
                break;
            case "debito":
                break;
            case "credito":
                variacaoDePreco = 0.03;
                break;
            default:
                return "Forma de pagamento inválida!"
        }
        return "";
    }

}

export { CaixaDaLanchonete };
