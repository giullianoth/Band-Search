import { fadeIn, fadeOut } from "./effects.js"

const { body } = document
const modalOpen = () => document.querySelector(".j_modal")

const modalElement = video => {
    const element = document.createElement("section")
    element.className = "bs-modal j_modal"

    element.innerHTML = `
        <div class="bs-modal__container">
            <div class="bs-modal__embedded">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}?si=cVquAeb3X_DtzOeb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <header class="bs-modal__title">
                <h2>${video.snippet.title}</h2>
            </header>
        </div>
    `

    return element
}

const Modal = video => {
    const modal = modalElement(video)
    body.append(modal)
    fadeIn(modal, "flex")

    if (modalOpen()) {
        modalOpen().addEventListener("click", ({ target }) => {
            if (target.classList.contains("j_modal")) {
                fadeOut(modal, true)
            }
        })
    }
}

export default Modal