const getApiData = async (url) => {
    let data = null;

    await fetch(url).then((response) => response.json())
    .then((body) => {
        data = body;
    })
    .catch((error) => {
        data = error;
    })

    return data;
}

const youtubeApi = async (search) => {

    let data = null
    let youtubeApiKey = "AIzaSyDxWH8nbxeYe5S9gs6nHDlydxQqFMjpo_g";
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${youtubeApiKey}`;

    await getApiData(url)
    .then((dataYT) => {
        data = dataYT.items;
    })
    .catch((error) => {
        data = `Erro ao pesquisar: ${error}`;
    })

    return data;
}

// const ticketmasterApi = async (search) => {
//     let data = null;
//     let ticketMasterApiKey = "q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG";
//     let url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${search}&classificationName=music&apikey=${ticketMasterApiKey}`;

//     await getApiData(url)
//     .then((dataApi) => {
//         data = dataApi;
//     })
//     .catch((error) => {
//         data = error;
//     })
//     .finally(() => {
//         console.log("Rodou");
//         fadeOut(document.querySelector(".loading"));
//         setTimeout(() => {
//             document.querySelector(".loading").remove();
//         }, 600);
//     });

//     return data._embedded?.attractions[0] ?? null;
// }

export { youtubeApi, /* ticketmasterApi */ };

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=metallica&key=AIzaSyDxWH8nbxeYe5S9gs6nHDlydxQqFMjpo_g
// https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=metallica&classificationName=music&apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG