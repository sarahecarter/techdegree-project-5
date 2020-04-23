const search = document.querySelector('#search');
const imageTexts = document.querySelectorAll('a[data-sub-html]');

const imageSearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    imageTexts.forEach(imageText => {
        const text = imageText.textContent.toLowerCase();
        const image = imageTextWhen.nextElementSibling;

        if(text.indexOf(searchTerm) > -1) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
};

search.addEventListener('keyup', imageSearch);

