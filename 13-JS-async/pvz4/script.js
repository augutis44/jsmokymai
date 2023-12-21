const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request);
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                // callback(undefined, request.responseText);
                resolve(JSON.parse(request.responseText));
            } else if (request.readyState === 4) {
                // console.log('Nepavyko gauti duomenų.');
                // callback('Nepavyko gauti duomenų.', undefined);
                reject('Nepavyko gauti duomenu');
            }
        });

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        request.open('GET', resource);

        request.send();
    });
}

// getTodos((error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         data = JSON.parse(data);
//         console.log(data);
//     }
// });

getTodos('./duomenys.json').then(data => {
    console.log('promise resolved:', data);
}).catch(error => {
    console.log('promise rejected:', error);
});

