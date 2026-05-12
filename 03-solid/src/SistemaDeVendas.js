class SistemaDeVendas {
  constructor(vendaService) {
    this.vendaService = vendaService;
  }

  async processarVenda(pedido) {
    return this.vendaService.processarVenda(pedido);
  }
}

module.exports = SistemaDeVendas;
