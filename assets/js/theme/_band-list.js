import { fadeIn, fadeOut } from "./effects.js";

const mainDom = document.querySelector(".j_main .main-content");
const bandListDom = document.querySelector(".band-list");
const bandListContentDom = document.querySelector(".band-list-content");
// const backButton = bandListDom.querySelector(".back");
const formSearchField = document.querySelector(".j_search");

export default function bandList() {

    let formHeight = document.querySelector(".j_main_search").offsetHeight;

    // fadeIn(bandListDom);

    // let titleListHeight = bandListDom.querySelector(".band-list-title").offsetHeight;

    // bandListDom.style.height = `calc(100% - ${formHeight}px)`;
    // bandListContentDom.style.height = `calc(100% - ${titleListHeight}px)`;

    // backButton.onclick = function () {
    //     console.log(formSearchField);
    //     fadeOut(bandListDom);
    //     mainDom.classList.remove("list");
    // }
}