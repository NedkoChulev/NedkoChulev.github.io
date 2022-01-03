const body = document.getElementsByTagName('body')[0];
const template = document.getElementById('deck');
let deckId = 1;

function createDecks() {
    const deckUrl = `https://raw.githubusercontent.com/NedkoChulev/deck-checklist/main/images/deck_${deckId}.jpg`;

    fetch(deckUrl).then(response => {
        if (response.status === 200) {
            const component = template.content.cloneNode(true);
            const img = component.querySelector('img');
            const checkbox = component.querySelector('input');

            img.src = deckUrl;
            checkbox.addEventListener('change', function(e) {
                if (this.checked) {
                    img.classList.add('used');
                } else {
                    img.classList.remove('used');
                }
            });

            body.appendChild(component);
            deckId++;
            createDecks();
        }

        if (response.status === 404) {
            console.log('not found');
        }
    }).catch(() => {
        console.error('Failed to fetch.')
        return;
    });
}

createDecks();