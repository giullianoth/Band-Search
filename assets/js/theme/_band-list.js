import { fadeIn, fadeOut } from "./effects.js";
import videoModal from "./modal.js";
import setViewport from "./viewport.js";

const bandListDom = document.querySelector(".j_results");
const formAreaDom = document.querySelector(".j_form");
const formDom = formAreaDom.querySelector(".j_search");

const socialInfos = {
    facebook: {
        color: "#1877F2",
        title: "Facebook",
        // icon: (<FontAwesomeIcon icon={brands("facebook-f")} />)
    },

    instagram: {
        color: "#D62976",
        title: "Instagram",
        // icon: (<FontAwesomeIcon icon={brands("instagram")} />)
    },

    youtube: {
        color: "#FE0002",
        title: "YouTube",
        // icon: (<FontAwesomeIcon icon={brands("youtube")} />)
    },

    twitter: {
        color: "#1DA1F2",
        title: "Twitter",
        // icon: (<FontAwesomeIcon icon={brands("twitter")} />)
    },

    spotify: {
        color: "#1ED760",
        title: "Spotify",
        // icon: (<FontAwesomeIcon icon={brands("spotify")} />)
    },

    itunes: {
        color: "#EA4CC0",
        title: "iTunes",
        // icon: (<FontAwesomeIcon icon={brands("itunes-note")} />)
    }
}

const backButtonElement = () => {
    let button = document.createElement("button");
    button.className = "back";
    button.innerText = "Voltar";
    return button;
}

const socialItemElement = (network, link) => {

    let isValidSocialNetwork = network && link ? Object.keys(socialInfos).some((social) => social === network) : false;

    if (!isValidSocialNetwork) {
        return "";
    }

    let socialItem = document.createElement("li");

    socialItem.innerHTML = `
        <a href="${link}" target="_blank"style="background-color: ${socialInfos[network].color};">${socialInfos[network].title}</a>
        `;

    return socialItem.outerHTML;
}

const listItemElement = (data) => {

    let { thumbnails, title, description } = data.snippet;

    let itemElement = document.createElement("article");
    itemElement.className = "bs_main_content_results_list_item j_results_list_item";
    itemElement.setAttribute( "data-url", data.id.videoId);

    itemElement.innerHTML = `
        <div class="bs_main_content_results_list_item_thumbnail">
        <div class="img open_modal" style="background-image: url('${thumbnails.medium.url}');"></div>
        </div>
        <div class="bs_main_content_results_list_item_info">
        <header class="bs_main_content_results_list_item_info_title">
        <h2 class="open_modal">${title}</h2>
        </header>
        <p class="bs_main_content_results_list_item_info_desc open_modal">${description}</p>
        </div>
    `;

    return itemElement.outerHTML;
}

const headerElement = (title, socialInfo) => {
    let header = document.createElement("div");
    let titleElement = document.createElement("header");
    let socialListElement = document.createElement("ul");

    let socialNetworks = socialInfo ? Object.keys(socialInfo) : [];
    let socialLinks = socialInfo ? Object.values(socialInfo).map((item) => item[0].url) : [];

    header.className = "bs_main_content_results_header j_results_header";
    titleElement.className = "bs_main_content_results_header_title";
    socialListElement.className = "bs_main_content_results_header_desc";

    titleElement.innerHTML = `<h1>${title}</h1>`;

    socialNetworks.forEach((network, index) => {
        socialListElement.innerHTML += socialItemElement(network, socialLinks[index]);
    });

    header.innerHTML = titleElement.outerHTML + socialListElement.outerHTML + backButtonElement().outerHTML;

    return header;
}

const listElement = (list) => {

    let listAreaElement = document.createElement("div");
    listAreaElement.className = "bs_main_content_results_list j_results_list";

    list.forEach((item) => {
        listAreaElement.innerHTML += listItemElement(item);
    });

    return listAreaElement;
}

const bandList = ({ listItems, mainTitle, socialInfo }) => {

    bandListDom.innerHTML = headerElement(mainTitle, socialInfo).outerHTML + listElement(listItems).outerHTML;
    fadeIn(bandListDom, "flex");

    setViewport();

    const backButton = bandListDom.querySelector(".back");

    backButton.onclick = function () {
        fadeOut(bandListDom);
        formAreaDom.classList.remove("list");
        setTimeout(() => {
            bandListDom.innerHTML = "";
            formDom.querySelector("#search").value = "";
            bandListDom.style.display = "none";
        }, 300);
    }

    videoModal();
}

export default bandList;