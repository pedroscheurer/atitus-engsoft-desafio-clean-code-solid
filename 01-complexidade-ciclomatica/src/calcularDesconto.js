const descontoStrategy = {
  premium: (valor, anosCadastro) => {
    if (valor <= 500) return valor * 0.05;
    if (valor <= 1000) return valor * 0.10;
    if (anosCadastro > 5) return valor * 0.20;
    return valor * 0.15;
  },
  gold: (valor) => {
    if (valor > 1000) return valor * 0.10;
    return valor * 0.02;
  }
};

function calcularDesconto(cliente, valor) {
  const operacao = descontoStrategy[cliente.tipo];
  if (operacao) {
    return operacao(valor, cliente.anosCadastro);
  }
  return 0;
}

module.exports = calcularDesconto;
