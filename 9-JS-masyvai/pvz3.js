let salys = ['Lietuva', 'Kroatija', 'Prancuzija', 'Olandija', 'Estija', 'UK', 'USA']

salys.sort((pirma, antra) => {
    if (pirma.length < antra.length) return -1;
    else if (pirma.length > antra.length) return 1;
    else return 0;
    })

console.log(salys);