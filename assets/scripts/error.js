import ClearSearch from "./clear.js"
import { Container } from "./dom.js"
import { fadeIn } from "./effects.js"

const ErrorElement = message => {
    const element = document.createElement("div")
    element.className = "bs-error"

    element.innerHTML = `
        <p>${message}</p>
        <button class="bs-button j_clear">Voltar</button>
    `

    return element
}

const showError = message => {
    const errorElement = ErrorElement(message)
    Container.append(errorElement)
    fadeIn(errorElement, "flex")
    ClearSearch(errorElement)
}

export default showError