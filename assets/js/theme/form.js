import loadingScreen from "./loading-screen.js";
import { fadeIn, fadeOut } from "./effects.js";
import bandList from "./_band-list.js";
import { youtubeApi } from "../api/connect.js";

const mainDom = document.querySelector(".j_main .main-content");
const formSearch = document.querySelector(".j_search");
const mainSearchDom = document.querySelector(".j_main_search");
const bandListDom = document.querySelector(".band-list");

export default async function jForm() {

    formSearch.onsubmit = async function (event) {
        event.preventDefault();

        // effects().fadeOut(bandListDom);

        mainDom.classList.add("list");

        let searchValue = formSearch.querySelector("#band").value;
        let loadingScreenDom = loadingScreen();

        mainDom.append(loadingScreenDom);
        fadeIn(loadingScreenDom, "flex");

        await youtubeApi(searchValue).then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(`Falha na pesquisa: ${error}`);
        })
        .finally(() => {
            document.querySelector(".load-screen").remove();
        })
    }
}