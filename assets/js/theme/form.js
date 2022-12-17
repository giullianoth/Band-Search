import loadingScreen from "./loading-screen.js";
import { fadeOut } from "./effects.js";
import bandList from "./_band-list.js";
import error from "./error.js";
import { TicketMasterSearch, YouTubeSearch } from "../api/connect.js";
import setViewport from "./viewport.js";

const mainDom = document.querySelector(".j_main_content");
const formDom = document.querySelector(".j_form");
const formSearch = document.querySelector(".j_search");
const bandListDom = document.querySelector(".j_results");

const validate = async (search) => {
    let bandData = null;

    try {
        const dataInfo = await TicketMasterSearch(search).then((data) => data);

        if (typeof (dataInfo) === "object") {

            const { socialInfo, mainTitle } = dataInfo;

            const listItems = await YouTubeSearch(search).then((data) =>
                data.filter((video) => video.id.kind.includes("video"))
            );

            bandData = {socialInfo, mainTitle, listItems};

        } else {
            bandData = dataInfo;
        }
    } catch (err) {
        bandData = "Erro inesperado na pesquisa.";
    }

    return bandData;
}

export default function jForm() {

    formSearch.onsubmit = async function (event) {
        event.preventDefault();

        let errorDom = document.querySelector(".j_error") ?? null;

        fadeOut(bandListDom);

        if (errorDom) {
            errorDom.remove();
        }

        let loadingScreenDom = loadingScreen();
        mainDom.append(loadingScreenDom);

        formDom.classList.add("list");

        let searchValue = formSearch.querySelector("#search").value;

        if (searchValue.length !== 0) {
            const dataValidated = await validate(searchValue).then((data) => data);
            mainDom.querySelector(".j_loading").remove();

            if (typeof(dataValidated) !== "object") {
                mainDom.appendChild(error(dataValidated));
                setViewport();
            } else {
                bandList(dataValidated);
            }
        }
    }
}