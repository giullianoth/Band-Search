import loadingScreen from "./loading-screen.js";
import effects from "./effects.js";
import bandList from "./_band-list.js";

const mainDom = document.querySelector(".j_main .main-content");
const formSearch = document.querySelector(".j_search");
const mainSearchDom = document.querySelector(".j_main_search");
const bandListDom = document.querySelector(".band-list");

export default function jForm() {

    formSearch.onsubmit = function (event) {
        event.preventDefault();

        effects().fadeOut(bandListDom);

        mainDom.classList.add("list");

        let loadingScreenDom = loadingScreen();

        mainDom.append(loadingScreenDom);
        effects().fadeIn(loadingScreenDom, "flex");

        setTimeout(() => {
            effects().fadeOut(loadingScreenDom);
            loadingScreenDom.remove();
            bandList();
        }, 3000);
    }
}