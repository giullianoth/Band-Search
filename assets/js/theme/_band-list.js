import { fadeIn, fadeOut } from "./effects.js";

const mainDom = document.querySelector(".j_main .main-content");
const bandListDom = document.querySelector(".band-list");
const formSearchField = document.querySelector(".j_search");

const listItemElement = (data) => {

    let listElement = document.createElement("article");
    listElement.className = "band-list-content-videos-item";

    listElement.innerHTML = `
    <div class="band-list-content-videos-item-thumb"><a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank"><img src="${data.snippet.thumbnails.medium.url}" alt="${data.snippet.title}" style="width: ${data.snippet.thumbnails.medium.width}px; height: ${data.snippet.thumbnails.medium.height}px;"></a></div>
    <div class="band-list-content-videos-item-info">
    <header class="band-list-content-videos-item-info-title"><h2><a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank">${data.snippet.title}</a></h2></header>
    <p class="band-list-content-videos-item-info-desc"><a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank">${data.snippet.description}</a></p>
    <p class="band-list-content-videos-item-info-postby"><a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank"><i class="fa-solid fa-user"></i> ${data.snippet.channelTitle}</a></p>
    </div>
    `;

    return listElement;
}

const headerElement = (title) => {
    let header = document.createElement("header");
    header.className = "band-list-title j_list_title";
    header.innerHTML = `<h1>${title}</h1>`;
    return header;
}

const listElement = () => {
    let list = document.createElement("div");
    list.className = "band-list-content";

    list.innerHTML = `
    <p class="band-list-content-desc j_list_desc"></p>
    <div class="band-list-content-videos j_list"></div>
    `;

    return list;
}

const backButtonElement = () => {
    let button = document.createElement("button");
    button.className = "back";
    button.innerText = "Voltar";
    return button;
}

const bandList = (data) => {

    let formHeight = document.querySelector(".j_main_search").offsetHeight;

    fadeIn(bandListDom);
    bandListDom.style.display = "block";
    bandListDom.append(backButtonElement());
    bandListDom.append(headerElement(data[0].snippet.channelTitle));
    bandListDom.append(listElement());

    data.forEach((item) => {
        if (item.id.kind.replace("youtube#", "") === "video") {
            let listArea = document.querySelector(".j_list");
            listArea.append(listItemElement(item));
            console.log(item);
        }
    })

    const backButton = bandListDom.querySelector(".back");
    const bandListContentDom = document.querySelector(".band-list-content");
    let titleListHeight = bandListDom.querySelector(".band-list-title").offsetHeight;

    bandListDom.style.height = `calc(100% - ${formHeight}px)`;
    bandListContentDom.style.height = `calc(100% - ${titleListHeight}px)`;

    backButton.onclick = function () {
        fadeOut(bandListDom);
        mainDom.classList.remove("list");
        setTimeout(() => {
            bandListDom.style.display = "none";
        }, 600);
    }
}

export default bandList;