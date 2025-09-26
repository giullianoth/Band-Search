import { TMApiKey, YTApiKey } from "./variables.js"

const TicketMasterData = async search => {
    try {
        const res = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${search}&apikey=${TMApiKey}`)
            .then(res => res.json())
            .then(data => data._embedded.attractions)
            .catch(err => err)

        return res
    } catch (error) {
        return {
            error: `Sua pesquisa por "${search}" não retornou resultados. Tente de novo.`
        }
    }
}

const YouTubeData = async search => {
    try {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${YTApiKey}`)
            .then(res => res.json())
            .then(data => data.items.filter(video => video.id.kind.includes("video")))
            .catch(err => err)

        return res
    } catch (error) {
        return {
            error: `Sua pesquisa por "${search}" não retornou resultados. Tente de novo.`
        }
    }
}

const BandData = async search => {
    const TMData = await TicketMasterData(search)
    const YTData = await YouTubeData(search)

    if (TMData.error) {
        return TMData
    }

    if (YTData.error) {
        return YTData
    }

    const isMusic = TMData.some(item =>
        item.classifications.some(classification =>
            classification.segment.name === "Music"
        )
    )

    if (!isMusic) {
        return {
            error: `Sua pesquisa por "${search}" é inválida. Apenas bandas ou artistas (cantores).`
        }
    }

    const { externalLinks, name } = TMData.find(item =>
        item.classifications.find(classification =>
            classification.segment.name === "Music"
        )
    )

    return {
        name,
        social: externalLinks,
        videos: YTData
    }
}

export default BandData