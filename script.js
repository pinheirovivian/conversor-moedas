function converterMoeda() {
    const valorOrigem = parseFloat(document.getElementById("valorOrigem").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;

    const taxasConversao = {
        real: 1,
        euro: 0.18,
        dolar: 0.22,
        libra: 0.16,
        iene: 24.92
    };

    const valorConvertido = valorOrigem * (taxasConversao[moedaDestino] / taxasConversao[moedaOrigem]);

    const resultadoElement = document.getElementById("valorConvertido");
    resultadoElement.textContent = `Valor convertido: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}
