// 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

const request = (callback) => {
    console.log('Function executed');
    callback();
}

const callBackFunction = () => {
    setTimeout(() => {
        console.log('Callback function executed');
    }, 2000);
};

request(callBackFunction);