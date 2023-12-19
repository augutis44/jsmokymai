window.addEventListener('load', function () {
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;
    let owedFactories = [];

    this.document.querySelector('.main-game .click-zone').onclick = function () {
        score += 10;
        scoreBlock.innerText = score;
    }

    this.document.querySelectorAll('.factory').forEach(function (fc) {
        const factory = {
            title: fc.querySelector('.title').innerText,
            cost: parseInt(fc.querySelector('.price').innerText),
            isAdding: parseInt(fc.querySelector('.adds').innerText),
            count: parseInt(fc.querySelector('.count').innerText.slice(1, -1)),
            button: fc.querySelector('button')
        };
        factory.button.onclick = function () {
            if (score >= factory.cost) {
                score -= factory.cost;
                factory.count++;
                scoreBlock.innerText = score;
                fc.querySelector('.count').innerText = '(' + factory.count + ')';
            }
        }
        owedFactories.push(factory);
    });

    setInterval(function() {
        score += owedFactories.map(x => x.count * x.isAdding).reduce((partial_sum, number) => partial_sum + number, 0);
        scoreBlock.innerText = score;
    }, 1000);
});

