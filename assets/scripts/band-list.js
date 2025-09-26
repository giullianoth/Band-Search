import BandData from "./api.js";
import ClearSearch from "./clear.js";
import { Container } from "./dom.js";
import { fadeIn } from "./effects.js";
import showError from "./error.js";

const socialInfo = {
    facebook: {
        color: "#1877F2",
        title: "Facebook",
    },

    instagram: {
        color: "#D62976",
        title: "Instagram",
    },

    youtube: {
        color: "#FE0002",
        title: "YouTube",
    },

    twitter: {
        color: "#1DA1F2",
        title: "Twitter",
    },

    spotify: {
        color: "#1ED760",
        title: "Spotify",
    },

    itunes: {
        color: "#EA4CC0",
        title: "iTunes",
    }
}

const listElement = data => {
    const results = document.createElement("section")
    const heading = document.createElement("div")
    const socialLinks = document.createElement("ul")
    const list = document.createElement("div")
    const { name, social, videos } = data

    results.className = "bs-results j_results"
    heading.className = "bs-results__heading"
    socialLinks.className = "bs-results__heading-links"
    list.className = "bs-results__list"

    heading.innerHTML = `
        <header>
            <h2>${name}</h2>
        </header>
        <button class="bs-button j_clear">Limpar</button>
    `

    if (social) {
        const socialKeys = Object.keys(socialInfo)

        socialKeys.forEach(key => {
            if (social[key]) {
                const socialLink = document.createElement("li")

                socialLink.innerHTML = `
                    <a
                        href="${social[key][0].url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bs-results__heading-link"
                        style="background-color: ${socialInfo[key].color};">
                        ${socialInfo[key].title}
                    </a>
                `

                socialLinks.append(socialLink)
            }
        })
    }

    videos.forEach(video => {
        const videoElement = document.createElement("article")
        const { thumbnails, title, description } = video.snippet

        videoElement.className = "bs-results__video"
        videoElement.setAttribute("data-videoid", video.id.videoId)
        videoElement.setAttribute("title", "Clique para abrir o vídeo")

        videoElement.innerHTML = `
            <div class="bs-results__video-thumbnail">
                <img src="${thumbnails.medium.url}" alt="${title}">
            </div>

            <div class="bs-results__video-info">
                <header class="bs-results__video-title">
                    <h3>${title}</h3>
                </header>

                <p class="bs-results__video-description">${description}</p>
            </div>
        `

        list.append(videoElement)
    })

    heading.append(socialLinks)
    results.append(heading, list)

    return results
}

const BandList = async search => {
    const data = await BandData(search)

    if (data.error) {
        showError(data.error)
        return
    }

    const results = listElement(data)

    Container.append(results)
    fadeIn(results, "flex")
    ClearSearch(results)
}

export default BandList