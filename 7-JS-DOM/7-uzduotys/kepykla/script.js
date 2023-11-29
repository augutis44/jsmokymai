document.getElementById('calculate').addEventListener('click', () => {
    let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations ? 'Taip' : 'Ne';

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti: </strong> ${bakeryTotal} kepalu</p>`;
    resultsDiv.innerHTML += `<p><strong>Kepyklai reikis speti pagaminti:</strong> ${dayReservations} kepalu </p>`;
    resultsDiv.innerHTML += `<p><strong>Ar spes pagaminti?</strong> ${isBakeryGonnaMakeIt}</p>`;
});

document.getElementById('employees-count').addEventListener('keyup', event => {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;

    document.getElementById('results').innerHTML = '<p>Kol kas cia nieko nera</p>';
});
