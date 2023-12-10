const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// MILESTONE 1
// Variabile che conterrà tutte le immagini dell'array
let img = '';

// Eseguo un forEach in cui appendo tutte le immagini con la struttura che è presente nell'html
images.forEach((elem) => {
    img += 
    `<div class="item">
        <img src="./${elem.image}" alt="">
        <div class="position-absolute bottom-50 text-right color-white padding-text">
            <h2>${elem.title}</h2>
            <h5>${elem.text}</h5>
        </div>
    </div> `
})

// Recuperiamo il contenitore delle immagini e ci appendiamo la stringa img
const mainImage = document.querySelector('.images').innerHTML = img

// Salvo in una variabile l'indice di partenza dell'array. All'elemento con questo indice assegno la classe 'active'
let activeElement = 0;
let imagesDom = document.querySelectorAll('.item');
imagesDom[activeElement].classList.add('active');

// Recupero i due pulsanti dal dom
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Aggiungere l'eventlistener al pulsante next
nextBtn.addEventListener('click', function(){
    // Prima rimuovo la classe active dall'elemento che attualmente ha
    imagesDom[activeElement].classList.remove('active');

    // Controllo che il valore dell'indice non sia uguale a quello dell'ultimo elemento dell'array
    if(activeElement === images.length - 1){
        activeElement = 0;
    }
    else{
        // Incremento il valore di activeelement
        activeElement++;
    }
    // Assegno nuovamente la classe active 
    imagesDom[activeElement].classList.add('active');
})

// Aggiungere l'eventlistener al pulsante prev
prevBtnBtn.addEventListener('click', function(){
    // Prima rimuovo la classe active dall'elemento che attualmente ha
    imagesDom[activeElement].classList.remove('active');

    // Controllo che il valore dell'indice sia uguale a 0
    if(activeElement === 0){
        activeElement = images.length - 1;
    }
    else{
        // Decremento il valore di activeelement
        activeElement--;
    }
    // Assegno nuovamente la classe active 
    imagesDom[activeElement].classList.add('active');
})



