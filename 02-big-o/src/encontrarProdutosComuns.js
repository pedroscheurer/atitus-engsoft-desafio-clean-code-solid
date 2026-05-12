/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const aSet = new Set(listaA);
  const bSet = new Set(listaB);
  const comuns = [];
  for (const item of aSet) {
    if (bSet.has(item)) {
      comuns.push(item);
    }
  }
  return comuns;
}

module.exports = encontrarProdutosComuns;
