let fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0].name));