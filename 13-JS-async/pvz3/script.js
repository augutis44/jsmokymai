const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('Nepavyko gauti duomenų.');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();