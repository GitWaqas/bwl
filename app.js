const fetch = require('node-fetch');

async function getGameData() {
let data = await fetch('http://13.74.31.101/api/points');
let main = await data.json();
console.log(main);
}

getGameData();