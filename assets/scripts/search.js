import { SearchForm, SearchInput, SearchWrapper } from "./dom.js"
import showError from "./error.js"

const Search = () => {
    SearchForm.addEventListener("submit", event => {
        event.preventDefault()
        const { value } = SearchInput

        SearchWrapper.classList.add("searching")

        if (!value) {
            showError("Digite o nome da banda ou artista.")
            return
        }
    })
}

export default Search