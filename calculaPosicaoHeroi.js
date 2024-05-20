const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

if (isNaN(posicaoInicial) || isNaN(totalPassos)) {
    console.log("Por favor, insira números válidos para a posição inicial e o número de passos.");
} else {
    let posicaoFinal = posicaoInicial + totalPassos;
    console.log("Posicao final do heroi:", posicaoFinal);
}
