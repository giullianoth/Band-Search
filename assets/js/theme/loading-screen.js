const loadingBarsLength = 3;

export default function loadingScreen() {

    let loadScreen = document.createElement("section");
    let loading = document.createElement("div");
    let loadingBars = [];

    for (let i = 0; i < loadingBarsLength; i++) {
        let singleBar = document.createElement("div");
        singleBar.setAttribute("class", `loading-bar bar-${i + 1}`);
        loadingBars.push(singleBar);
    }

    loadScreen.setAttribute("class", "load-screen");
    loading.setAttribute("class", "loading");

    loadingBars.forEach(function (item) {
        loading.appendChild(item);
    })

    loadScreen.appendChild(loading);

    return loadScreen;
}