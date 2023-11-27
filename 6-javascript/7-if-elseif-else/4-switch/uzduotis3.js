let error = 'vartotojo klaida';

switch (error) {
    case 'technine klaida':
        console.log('Technine klaida. Susisiekite su administracija.');
        break;
    case 'vartotojo klaida':
        console.log('Vartotojo klaida. Patikrinkite ar viska gerai suvedete.');
        break;
    case 'sistemos klaida':
        console.log('Sistemos klaida. Susisiekite su imones IT skyriumi.');
        break;
}
