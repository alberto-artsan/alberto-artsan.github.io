
const flagelement = document.getElementById("flag");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./json/${language}.json`)
    const texts = await requestJson.json();

    for (const textToChange of textsToChange)
        {
            const section = textToChange.datasection.section;
            const value = textToChange.dataset.value;

            textToChange.innerHTML = text[section][value];
        }
};

flagelement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});