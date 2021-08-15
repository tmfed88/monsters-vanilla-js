let monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock'
];

let app = document.querySelector('#app');

// Shuffle 
let shuffle = array => {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

shuffle(monsters);
console.log(shuffle(monsters));

app.innerHTML = '<div class="row">' + monsters.map((monster, index) => {
    let html =
        '<div class="grid">' + 
            `<button data-monster-id="${index}">` +
                `<img alt="${monster}" src="images/door.svg">` +
            '</button>' +
        '</div>';
    return html;
}).join('') + '</div>';


let clickHandler = (e) => {
    let monster = e.target.closest('[data-monster-id]');

    if (!monster) return;
    
    let id = monster.getAttribute('data-monster-id');

    monster.parentNode.innerHTML = `<img alt="${monsters[id]}" src="images/${monsters[id]}.svg">`
    console.log(e.target);
}

document.addEventListener('click', clickHandler, false);

