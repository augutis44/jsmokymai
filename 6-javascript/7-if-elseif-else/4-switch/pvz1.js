let role = 'moderatorius';

switch (role) {
    case 'admin':
        console.log('leidžiame viską');
        break;
    case 'moderatorius':
        console.log('leidžiama naujinti turinį');
        break;
    case 'rasytojas':
        console.log('tik rašo turinį');
        break;
    case 'vartotojas':
        console.log('gali skaityti ir mėgti');
        break;
    default:
        console.log('neprisijungęs');
        break;
}