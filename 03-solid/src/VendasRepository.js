class VendasRepository {
    constructor() {
        this.vendas = [];
    }
    salvarVenda(venda) {
        this.vendas.push(venda);
    }
}

module.exports = VendasRepository;