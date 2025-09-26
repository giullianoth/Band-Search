import { SearchInput, SearchWrapper } from "./dom.js"
import { fadeOut } from "./effects.js"

const buttonClear = () => document.querySelector(".j_clear")

const ClearSearch = elementToRemove => {
    if (buttonClear()) {
        buttonClear().addEventListener("click", () => {
            fadeOut(elementToRemove, true)
            SearchWrapper.classList.remove("searching")
            SearchInput.value = ""
        })
    }
}

export default ClearSearch