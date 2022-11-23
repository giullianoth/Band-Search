import loadingScreen from "./loading-screen.js";
import { fadeIn, fadeOut } from "./effects.js";
import bandList from "./_band-list.js";
import { ticketmasterApi, youtubeApi } from "../api/connect.js";

const mainDom = document.querySelector(".j_main .main-content");
const formSearch = document.querySelector(".j_search");
const mainSearchDom = document.querySelector(".j_main_search");
const bandListDom = document.querySelector(".band-list");

export default async function jForm() {

    formSearch.onsubmit = async function (event) {
        event.preventDefault();

        // effects().fadeOut(bandListDom);

        mainDom.classList.add("list");

        let loadingScreenDom = loadingScreen();

        mainDom.append(loadingScreenDom);
        fadeIn(loadingScreenDom, "flex");

        await youtubeApi().then((data) => {
            console.log(data);
        })

        // console.log(formSearch.querySelector("#band").value);
        // await ticketmasterApi(formSearch.querySelector("#band").value)
        // .then((data) => {
        //     let { name, externalLinks } = data;
        //     console.log(name, externalLinks);
        // });
    }
}