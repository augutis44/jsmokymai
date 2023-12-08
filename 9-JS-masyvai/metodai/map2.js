let skaiciai = [1, 2, 3, 4];

let punktai = skaiciai.map(x => '<li>' + x + '</li>');
console.log('saraso punktai', punktai);

let html = '<ul>' + punktai.join('') + '</ul>';
console.log('galutinis html', html);