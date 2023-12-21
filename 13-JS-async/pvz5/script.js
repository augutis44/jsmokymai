fetch('./duomenys.json').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log('resolved', data);
    document.querySelector('#uzduotys p').style.display = 'none';
    let liitems = data.map(item => `<li>${item.uzduotis}</li>`);
    // console.log(liitems);
    let html = `<ul>${liitems.join('')}</ul>`;
    console.log(html);
    document.querySelector('#uzduotys').innerHTML += html;
}).catch(error => {
    console.log('rejected', error);
});
