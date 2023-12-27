// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        const todos = response.data;
        // console.log(todos);
        let html = '';
        for (const todo of todos) {
            // console.log(todo);
            html += `
                <div class="todo">
                    <h3>${todo.title}</h3>
                    <p>${todo.completed ? 'Atlikta' : 'Neatlikta'}</p>
                </div>
            `;
        }
        document.querySelector('.todos').innerHTML = html;
    })
    .catch(error => console.log(error));

    // axios.get(....)
// axios.post(...)
// axios.put(...)
// axios.delete(...)

// fetch(..., { method: 'GET' })
// fetch(..., { method: 'POST' })
// fetch(..., { method: 'PUT' })
// fetch(..., { method: 'DELETE' })

document.querySelector('button').addEventListener('click', () => {
    // console.log('Paspaudei mygtuka');

    let naujasTodo = {
        title: "Nauja uzduotis 2",
        body: "Koks nors uzduoties aprasymas 2",
        userId: 3
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', naujasTodo)
        .then(response => console.log(response))
        .catch(error => console.log(error));
});