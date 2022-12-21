const bodyDom = document.querySelector("body");
const switchDom = document.querySelector(".j_switch");
const logoImg = document.querySelector(".j_theme_logo");
const cardContainer = document.querySelector(".j_card_container");

export default function darkTheme() {

    const titleSwitch = {
        dark: "Muito escuro? Mude para o tema claro.",
        light: "Muito claro? Mude para o tema escuro."
    }

    const cardImg = {
        dark: "cant-see",
        light: "my-eyes"
    }

    const logo = {
        dark: "logo_light",
        light: "logo_dark"
    }

    cardContainer.style.backgroundImage = `url(assets/images/${bodyDom.classList.contains("dark_theme") ? cardImg.dark : cardImg.light}.gif)`;
    switchDom.setAttribute("title", (bodyDom.classList.contains("dark_theme") ? titleSwitch.dark : titleSwitch.light));

    switchDom.onclick = function () {
        bodyDom.classList.toggle("dark_theme");
        logoImg.src = `assets/images/${bodyDom.classList.contains("dark_theme") ? logo.dark : logo.light}.png`;
        cardContainer.style.backgroundImage = `url(assets/images/${bodyDom.classList.contains("dark_theme") ? cardImg.dark : cardImg.light}.gif)`;
        switchDom.setAttribute("title", (bodyDom.classList.contains("dark_theme") ? titleSwitch.dark : titleSwitch.light));
    }
}