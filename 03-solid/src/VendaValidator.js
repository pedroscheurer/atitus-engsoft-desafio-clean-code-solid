class VendaValidator {
    validarVenda(pedido) {
        if (!pedido.itens || pedido.itens.length === 0) {
            throw new Error("Pedido sem itens");
        }
    }
}

module.exports = VendaValidator;
