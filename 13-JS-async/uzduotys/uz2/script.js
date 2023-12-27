// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
// duomenimis.

// the code fetches JSON data from the 'https://fakestoreapi.com/products' URL using the fetch API, parses the response as JSON, and then logs the parsed data to the console or logs any errors that occur during the process.

// This line declares a constant named doSomething and assigns an asynchronous arrow function to it. As before, the use of async indicates that the function will work with promises, and it allows the use of the await keyword inside the function.
const doSomething = async () => {

    // This line makes an asynchronous network request to the 'https://fakestoreapi.com/products' URL using the fetch function. The await keyword is used to pause the execution of the function until the promise returned by fetch resolves. The Response object is stored in the response constant.
    const response = await fetch('https://fakestoreapi.com/products');

    // const data = await response.json();: This line continues the asynchronous flow. It uses the json() method of the Response object (response) to asynchronously parse the response body as JSON. The parsed JSON data is stored in the data constant.
    // return data;: The function returns the parsed JSON data (data). Since the function is declared as async, it implicitly returns a promise that will resolve with the value of data.
    const data = await response.json()

    return data;
}

// doSomething().then(data => console.log(data)).catch(err => console.log(err));: This line invokes the doSomething function. Since doSomething is an asynchronous function, it returns a promise. The then method is used to handle the resolved value (the parsed JSON data), and the catch method is used to handle any errors that might occur during the asynchronous operations.
// If the promise resolves successfully, the then callback is executed, logging the data to the console.
// If an error occurs during the asynchronous operations (e.g., network error or parsing error), the catch callback is executed, logging the error to the console.
doSomething().then(data => console.log(data)).catch(err => console.log(err));
