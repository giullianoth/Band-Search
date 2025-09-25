const { body } = document
const switchButton = document.querySelector(".j_theme_switch")
const cardImageElement = document.querySelector(".j_theme_card")
const pageLogoElement = document.querySelector(".j_page_logo")

const switchTitle = {
    dark: "Muito escuro? Mude para o tema claro.",
    light: "Muito claro? Mude para o tema escuro."
}

const cardImage = {
    dark: "cant-see.gif",
    light: "my-eyes.gif"
}

const pageLogo = {
    dark: "logo_light.png",
    light: "logo_dark.png"
}

const change = () => {
    cardImageElement.src = `/assets/images/${body.classList.contains("dark-theme") ? cardImage.dark : cardImage.light}`

    switchButton.setAttribute(
        "title",
        body.classList.contains("dark-theme") ? switchTitle.dark : switchTitle.light
    )
}

const ChangeTheme = () => {
    change()

    switchButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme")
        pageLogoElement.src = `/assets/images/${body.classList.contains("dark-theme") ? pageLogo.dark : pageLogo.light}`
        change()
    })
}

export default ChangeTheme