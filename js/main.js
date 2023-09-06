// TODO:
// Refatorar o código
// Desabilitar controles
// Botão para reiniciar
// Pedir Nome do usuário
// Saudação

const metaDiaria = document.getElementById('meta-diaria');
const quantidade = document.getElementById('quantidade');
const metaMl = document.getElementById('meta-ml');
const quantidadeMl = document.getElementById('quantidade-ml');
const btComecar = document.getElementById('bt-comecar');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const percentual = document.getElementById('percentual');
const modal = document.getElementById('modal');
const fechar = document.getElementById('fechar');

let contagemRegressivaInterval;
let tempoRestante;
let meta = 0;
let mlTomado = 0;

// Crie um novo elemento de áudio
var audio = new Audio('./audio/agua.mp3');

btComecar.addEventListener('click', () => {
    // Tempo em segundos para a contagem regressiva
    const segundosIniciais = (parseInt(horas.value) * 3600) + (parseInt(minutos.value) * 60);
    tempoRestante = segundosIniciais;
    percentual.innerHTML = '0%';

    function atualizarContagemRegressiva() {
        const horas = Math.floor(tempoRestante / 3600);
        const minutos = Math.floor((tempoRestante % 3600) / 60);
        const segundos = tempoRestante % 60;

        const tempoRestanteTexto = `${horas}h ${minutos}m ${segundos}s`;

        document.getElementById('tempo-restante').textContent = tempoRestanteTexto;

        if (tempoRestante <= 0) {
            clearInterval(contagemRegressivaInterval);
            document.getElementById('tempo-restante').textContent = 'Meta concluida!';
            
            // Incrementa a variável meta ao final da contagem regressiva
            mlTomado += parseInt(quantidade.value);
            meta += (parseInt(quantidade.value) / parseInt(metaDiaria.value)) * 100;
            percentual.textContent = meta.toFixed(0) + '%';
            modal.style.display = 'flex';
            audio.play();

            setTimeout(function () {
                modal.style.display = 'none';
            }, (segundosIniciais * 1000)/2);

            // Verifica se a meta atingiu o valor de 100
            if (meta < 100) {
                // Se não atingiu, reinicie a contagem regressiva
                reiniciarContagem();
            }

            if (meta >= 100) {
                meta = 0;
            }
        }

        tempoRestante--;
    }

    function reiniciarContagem() {
        clearInterval(contagemRegressivaInterval);
        const segundos = (parseInt(horas.value) * 3600) + (parseInt(minutos.value) * 60);
        tempoRestante = segundos;
        atualizarContagemRegressiva();
        contagemRegressivaInterval = setInterval(atualizarContagemRegressiva, 1000);
    }

    // Chama a função inicialmente para exibir a contagem regressiva imediatamente
    atualizarContagemRegressiva();

    // Atualiza a contagem regressiva a cada segundo
    contagemRegressivaInterval = setInterval(atualizarContagemRegressiva, 1000); // 1000 ms = 1 segundo
});

fechar.addEventListener('click', () => {
    modal.style.display = 'none';
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