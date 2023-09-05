const metaDiaria = document.getElementById('meta-diaria');
const quantidade = document.getElementById('quantidade');
const metaMl = document.getElementById('meta-ml');
const quantidadeMl = document.getElementById('quantidade-ml');
const btComecar = document.getElementById('bt-comecar');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');

btComecar.addEventListener('click', () => {
    console.log(metaDiaria.value)
    console.log(quantidade.value)
    console.log(horas.value)
    console.log(minutos.value)

    // Tempo em segundos para a contagem regressiva
    const segundos = (parseInt(horas.value) * 3600) + (parseInt(minutos.value) * 60);
    let tempoRestante = segundos

    function atualizarContagemRegressiva() {
        const horas = Math.floor(tempoRestante / 3600);
        const minutos = Math.floor((tempoRestante % 3600) / 60);
        const segundos = tempoRestante % 60;

        const tempoRestanteTexto = `${horas}h ${minutos}m ${segundos}s`;

        document.getElementById('tempo-restante').textContent = tempoRestanteTexto;

        if (tempoRestante <= 0) {
            clearInterval(contagemRegressivaInterval);
            document.getElementById('tempo-restante').textContent = 'Tempo esgotado!';
        }

        tempoRestante--;
    }

    // Chama a função inicialmente para exibir a contagem regressiva imediatamente
    atualizarContagemRegressiva();

    // Atualiza a contagem regressiva a cada segundo
    const contagemRegressivaInterval = setInterval(atualizarContagemRegressiva, 1000); // 1000 ms = 1 segundo
})

// MUDANDO A COR DO RANGE DE ACORDO COM O AVANÇO
metaDiaria.addEventListener('input', () => {
    const total = metaDiaria.max
    const atual = metaDiaria.value
    var valor = (atual * 100) / total
    valor = parseInt(valor)

    metaDiaria.style.background = `linear-gradient(to right, #7fc4ed ${valor}%, #322f40 ${valor}%, #322f40 ${25 - valor}%, #322f40 ${50 - valor}%, #322f40 ${100 - valor}%)`;
    metaMl.innerHTML = atual + 'ml';
})

quantidade.addEventListener('input', () => {
    const total = quantidade.max
    const atual = quantidade.value
    var valor = (atual * 100) / total
    valor = parseInt(valor)

    quantidade.style.background = `linear-gradient(to right, #7fc4ed ${valor}%, #322f40 ${valor}%, #322f40 ${25 - valor}%, #322f40 ${50 - valor}%, #322f40 ${100 - valor}%)`;
    quantidadeMl.innerHTML = atual + 'ml';
})