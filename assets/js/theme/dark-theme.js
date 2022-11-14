const bodyDom = document.querySelector("body");
const switchDom = document.querySelector(".j_switch");
const logoImg = document.querySelector(".j_theme_logo");

export default function darkTheme() {

    switchDom.onmouseenter = function () {

        let cardContainer = document.querySelector(".j_card_container");
        let card = document.createElement("div");

        let image = bodyDom.classList.contains("dark") ? "cant-see.gif" : "my-eyes.gif";
        let cardTitle = bodyDom.classList.contains("dark")
            ? "Muito escuro? Mude para o tema claro."
            : "Muito claro? Mude para o tema escuro.";

        card.setAttribute("class", "img");
        card.style.backgroundImage = `url('assets/images/${image}')`;

        this.setAttribute("title", cardTitle);

        cardContainer.append(card);

        this.onclick = (Event) => {

            Event.preventDefault();

            bodyDom.classList.toggle("dark");
            switchDom.querySelector("i").classList.toggle("turned-on");
            
            image = bodyDom.classList.contains("dark") ? "cant-see.gif" : "my-eyes.gif";
            card.style.backgroundImage = `url('assets/images/${image}')`;

            let logo = bodyDom.classList.contains("dark") ? "logo_light.png" : "logo_dark.png";
            logoImg.attributes.src.nodeValue = `assets/images/${logo}`;
        };

        this.onmouseleave = function () {
            card.remove();
            image = bodyDom.classList.contains("dark") ? "cant-see.gif" : "my-eyes.gif";
        }
    }
}