const showButton = document.querySelector('.show-btn');
const displayMain = document.querySelector('.display-main');
const embedBox = document.querySelector('embed');

let wikipediaPages = [
    'https://en.wikipedia.org/wiki/Mary_I_of_England',
    'https://en.wikipedia.org/wiki/Time-utility_function',
    'https://en.wikipedia.org/wiki/History_of_India',
    'https://en.wikipedia.org/wiki/Byzantine_Empire',
    'https://en.wikipedia.org/wiki/Roman_Britain',
    'https://en.wikipedia.org/wiki/Bias',
    'https://en.wikipedia.org/wiki/Three_Kingdoms',
    'https://en.wikipedia.org/wiki/First_Crusade',
    'https://en.wikipedia.org/wiki/Death_of_Alexander_the_Great',
    'https://en.wikipedia.org/wiki/History_of_Ptolemaic_Egypt',
    'https://en.wikipedia.org/wiki/Gaul'
];

function returnRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function arrayRemove(array, value) {
    return array.filter(link => {
        return link !== value
    })
}

showButton.addEventListener('click', () => {
    let randomInt = returnRandomIndex(wikipediaPages);
    let randomLink = wikipediaPages[randomInt];

    embedBox.src = randomLink;
    wikipediaPages = arrayRemove(wikipediaPages, randomLink);
})