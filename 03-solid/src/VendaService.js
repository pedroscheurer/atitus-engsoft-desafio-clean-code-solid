class VendaService {
    constructor(vendasRepository, emailNotifier, vendaValidator, totalCalculator) {
        this.vendasRepository = vendasRepository;
        this.emailNotifier = emailNotifier;
        this.vendaValidator = vendaValidator;
        this.totalCalculator = totalCalculator;
    }

    async processarVenda(pedido) {
        this.vendaValidator.validarVenda(pedido);

        const total = this.totalCalculator.calcularTotal(pedido);
        const venda = { ...pedido, total, status: "pago" };

        await this.vendasRepository.salvarVenda(venda);
        await this.emailNotifier.sendEmail(pedido.clienteEmail, "Confirmação de Pedido", `Seu pedido ${pedido.id} foi processado com sucesso.`);

        return venda;
    }

}

module.exports = VendaService;