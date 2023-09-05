const metaDiaria = document.getElementById('meta-diaria');
const quantidade = document.getElementById('quantidade');

metaDiaria.addEventListener('input', () => {
    const total = metaDiaria.max
    const atual = metaDiaria.value
    var valor = (atual * 100) / total
    valor = parseInt(valor)
    
    metaDiaria.style.background = `linear-gradient(to right, #7fc4ed ${valor}%, #322f40 ${valor}%, #322f40 ${25-valor}%, #322f40 ${50-valor}%, #322f40 ${100-valor}%)`;
})

quantidade.addEventListener('input', () => {
    const total = quantidade.max
    const atual = quantidade.value
    var valor = (atual * 100) / total
    valor = parseInt(valor)
    
    quantidade.style.background = `linear-gradient(to right, #7fc4ed ${valor}%, #322f40 ${valor}%, #322f40 ${25-valor}%, #322f40 ${50-valor}%, #322f40 ${100-valor}%)`;
})