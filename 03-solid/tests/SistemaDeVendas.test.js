const SistemaDeVendas = require("../src/SistemaDeVendas");
const VendasRepository = require("../src/VendasRepository");
const EmailNotifier = require("../src/EmailNotifier");
const EmailService = require("../src/EmailService");
const VendaService = require("../src/VendaService");
const VendaValidator = require("../src/VendaValidator");
const TotalCalculator = require("../src/TotalCalculator");

describe("Desafio 3: SOLID", () => {
  test("Processa venda com total e desconto", async () => {
    const sistema = new SistemaDeVendas(
      new VendaService(
        new VendasRepository(),
        new EmailNotifier(new EmailService()),
        new VendaValidator(),
        new TotalCalculator()
      )
    );

    const pedido = { id: 1, clienteEmail: "a@a.com", itens: [{ preco: 1200, quantidade: 1 }] };
    const res = await sistema.processarVenda(pedido);
    expect(res.total).toBe(1080);
  });
});
