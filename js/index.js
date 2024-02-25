const section1 = document.getElementById('section1')
const cards = document.getElementById('cards')

const cargarCards = (entradas, observador) =>{
    // console.log('ENtro')
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }
    });
}

const observador = new IntersectionObserver(cargarCards,{
    root:null,
    rootMargin:'0px',
    threshold:0.3
})

observador.observe(section1)
