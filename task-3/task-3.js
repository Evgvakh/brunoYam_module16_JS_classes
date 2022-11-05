const triesLeft = document.querySelector('.triesLeft');
const p = document.querySelector('p');
const endGame = document.querySelector('.end-game');
const reset = document.querySelector('button');
const h2 = document.querySelector('h2');

function game() {
    const container = document.querySelector('.game-container');

    let tries = 5;
    let greenCounter = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * (8 + 1));
    }

    function setArrOfIndexes(arr) {
        let index = getRandomNumber();
        if (!arr.includes(index)) {
            arr.push(index);
        } else { setArrOfIndexes(arr); }
    }

    function tryCell(elem, color) {
        elem.classList.add('done');
        elem.style.backgroundColor = color;
    }

    function onEndGame(message) {
        endGame.style.display = 'initial';
        h2.textContent = message;
    }

    container.innerHTML = `<div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>
    <div class="game-cell red"></div>`;

    const cells = document.querySelectorAll('.game-cell.red');

    let arrVerify = [];

    for (let i = 0; i < 3; i++) {
        setArrOfIndexes(arrVerify);
    }

    arrVerify.forEach(element => {
        cells[element].className = "game-cell green";
    });

    for (let cell of cells) {
        cell.addEventListener('click', () => {
            if (tries > 0) {
                if (cell.className === 'game-cell red' && cell.className !== 'game-cell red done' && greenCounter < 4) {
                    tryCell(cell, "rgba(221, 23, 23, 0.842");
                    tries--;
                    if (tries > 0) {
                        triesLeft.textContent = tries;
                    } else {
                        triesLeft.textContent = tries;
                        onEndGame('YOU LOST :(');
                    }
                } else if (cell.className === 'game-cell green' && cell.className !== 'game-cell green done' && greenCounter < 4) {
                    tryCell(cell, "rgba(83, 238, 143, 0.874)");

                    for (let j of cells) {
                        if (j.className === 'game-cell green done') {
                            greenCounter++;
                        }
                    }

                    if (greenCounter >= 4) {
                        onEndGame('YOU WON!!!');
                    }
                }
            }
        });
    }
}

reset.addEventListener('click', () => {
    endGame.style.display = 'none';
    triesLeft.textContent = 5;
    game();
});

game();





