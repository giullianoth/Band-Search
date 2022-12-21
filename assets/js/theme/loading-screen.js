const loadingBarsLength = 3;

export default function loadingScreen() {

    let loadScreen = document.createElement("div");
    let loadingBars = [];

    loadScreen.className = "bs_main_content_loading j_loading";

    for (let i = 0; i < loadingBarsLength; i++) {
        let singleBar = document.createElement("div");
        singleBar.className = `loading_bar bar${i + 1}`;
        loadingBars.push(singleBar);
    }

    loadingBars.forEach(function (item) {
        loadScreen.appendChild(item);
    })

    return loadScreen;
}