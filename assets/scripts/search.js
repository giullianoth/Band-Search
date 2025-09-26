import { Container, SearchForm, SearchInput, SearchWrapper } from "./dom.js"
import { fadeIn, fadeOut } from "./effects.js"
import showError from "./error.js"
import Loading from "./loading.js"

const Search = () => {
    SearchForm.addEventListener("submit", event => {
        event.preventDefault()
        const loading = Loading()
        const { value } = SearchInput

        SearchWrapper.classList.add("searching")
        Container.append(loading)
        fadeIn(loading, "flex")

        if (!value) {
            showError("Digite o nome da banda ou artista.")
            fadeOut(loading, true)
            return
        }
    })
}

export default Search