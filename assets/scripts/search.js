import BandList from "./band-list.js"
import { Container, SearchForm, SearchInput, SearchWrapper } from "./dom.js"
import { fadeIn, fadeOut } from "./effects.js"
import showError from "./error.js"
import Loading from "./loading.js"

const results = () => document.querySelector(".j_results")
const errorElement = () => document.querySelector(".j_error")

const Search = () => {
    SearchForm.addEventListener("submit", async event => {
        event.preventDefault()

        if (results()) {
            fadeOut(results(), true)
        }

        if (errorElement()) {
            fadeOut(errorElement(), true)
        }

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

        await BandList(value)
        fadeOut(loading, true)
    })
}

export default Search