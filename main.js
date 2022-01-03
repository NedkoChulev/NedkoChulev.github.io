const DECK_COUNT = 21;
const body = document.getElementsByTagName('body')[0];
const template = document.getElementById('deck');

for (let i = 0; i < DECK_COUNT; i++) {
    const component = template.content.cloneNode(true);
    const img = component.querySelector('img');
    const checkbox = component.querySelector('input');

    img.src = `images/deck_${i+1}.jpg`;
    checkbox.addEventListener('change', function(e) {
        if (this.checked) {
            img.classList.add('used');
        } else {
            img.classList.remove('used');
        }
    });

    body.appendChild(component);
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);

    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }

    rawFile.send(null);
}

readTextFile('F:\\Projects\\Summoners War\\SummonersWarSiegeDefChecklist\\test.txt');