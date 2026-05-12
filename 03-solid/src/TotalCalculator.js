class TotalCalculator {
    calcularTotal(pedido) {
        let total = 0;
        for (const item of pedido.itens) {
            total += item.preco * item.quantidade;
        }
        if (total > 1000) {
            total *= 0.9;
        }
        return total;
    }
}

module.exports = TotalCalculator;
