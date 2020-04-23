const search = document.querySelector('#search');
const imageTexts = document.querySelectorAll('a[data-sub-html]');

const imageSearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    imageTexts.forEach(imageTexts => {
        const text = imageTexts.textContent.toLowerCase();
        const image = imageTexts.nextElementSibling;

        if(text.indexOf(searchTerm) > -1) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
};

search.addEventListener('keyup', imageSearch);

