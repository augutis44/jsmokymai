let buttons = document.querySelectorAll('#navigation button');

const removeButtonClass = () => {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonId = button.id;

        removeButtonClass();
        button.classList.add('active');

        switch (buttonId) {

            case 'button1':
                document.querySelector('.inside-container').innerHTML = `<table>
                    <tr>
                        <th class="no-wrap">Sandėlio zona</th>
                        <th class="no-wrap">Sandėlio plotas, kv. m</th>
                        <th class="no-wrap">Rampos</th>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>6 963,29</td>
                        <td>5 rampos</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>3 371,05</td>
                        <td>5 rampos</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>3 300,79</td>
                        <td>5 rampos bei 1 šoninė</td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td colspan="2">17,24 (bendrosios buitinės patalpos)</td>
                    </tr>
                </table>

                <div class="image-container">
                    <img src="images/plan1.png" alt="plan 1">
                </div>`
                break;

            case 'button2':
                document.querySelector('.inside-container').innerHTML = `<table>
                    <tr>
                        <th>Sandėlio zona</th>
                        <th>Socialinės patalpos antresolėse, kv. m</th>
                        <th>Rezervinis plotas antresolėse, kv. m</th>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>92,92</td>
                        <td>578,50</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>151,04</td>
                        <td>390,46</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>151,78</td>
                        <td>390,46</td>
                    </tr>
                </table>

                <div class="image-container">
                    <img src="images/plan2.png" alt="plan 2">
                </div>`
                break;

            case 'button3':
                document.querySelector('.inside-container').innerHTML = `<div class="administrative-quarters">
                    <div>
                        <p>0 aukštas</p>
                        <div>
                            <img src="images/plan3.png" alt="plan 3">
                        </div>
                    </div>

                    <div>
                        <p>1 aukštas</p>
                        <div>
                            <img src="images/plan4.png" alt="plan 4">
                        </div>
                    </div>
                    
                    <div>
                        <p>2 aukštas</p>
                        <div>
                            <img src="images/plan5.png" alt="plan 5">
                        </div>
                    </div>

                    <div>
                        <p>3 aukštas</p>
                        <div>
                            <img src="images/plan6.png" alt="plan 6">
                        </div>
                    </div>
                </div>`
                break;
        };
    });
});