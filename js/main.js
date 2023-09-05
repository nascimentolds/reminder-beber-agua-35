const metaDiaria = document.getElementById('meta-diaria');

metaDiaria.addEventListener('input', () => {
    console.log(metaDiaria.value)

    const valor = metaDiaria.value
    
    metaDiaria.style.background = `linear-gradient(to right, #7fc4ed ${valor}%, #322f40 ${100-valor}%)`;
})