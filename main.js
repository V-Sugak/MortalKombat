const $player1 = {
    class:'player1',
    name: 'Dima',
    hp:21,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'rifle',
    attack:attack()
}

const $player2 = {
    class:'player2',
    name: 'Misha',
    hp:100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'rifle',
    attack:attack()
}

function attack(p){console.log($p.name + 'Fight')};

function createPlayer (p) {
const $player = document.createElement('div');
$player.classList.add(p.class);

//progressBar
const $progressBar = document.createElement('div');
$progressBar.classList.add('progressbar');
$progressBar.appendChild($player);

const $life = document.createElement('div');
$life.classList.add('life');
$life.innerText=p.hr;
$life.style.width='100%';
$life.appendChild($progressBar);

const $name = document.createElement('div');
$name.classList.add('name');
$name.innerText=p.name;
$name.appendChild($progressBar);


//character
const $character = document.createElement('div');
$character.classList.add('character');
$character.appendChild($player);

const $img = document.createElement('img');
$img.src=p.img;
$img.appendChild($character);

}

function players (p1, p2) {
const $arenas = document.createElement('div');

const $p1=createPlayer(p1);
$p1.appendChild($arenas);

const $p2=createPlayer(p2);
$p1.appendChild($arenas);

}

players ($player1, $player2)