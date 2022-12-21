export default function setViewport() {

    let headerHeight = document.querySelector(".j_header").offsetHeight;
    let footerHeight = document.querySelector(".j_footer").offsetHeight;

    let windowHeight = window.innerHeight;
    let mainHeight = windowHeight - headerHeight - footerHeight;

    let mainDom = document.querySelector(".j_main");
    let formDom = document.querySelector(".j_form");
    let resultsListDom = document.querySelector(".j_results_list") ?? null;
    let errorDom = document.querySelector(".j_error") ?? null;

    let formHeight = formDom.offsetHeight;
    let resultsHeaderHeight = window.innerWidth < 1024 ? document.querySelector(".j_results_header").offsetHeight : 0;
    let paddingDiff = window.innerWidth < 1024 ? 40 : 80;
    let resultListHeight = mainHeight - formHeight - resultsHeaderHeight - paddingDiff;

    mainDom.style.height = `${mainHeight}px`;
    formDom.style.maxHeight = `${mainHeight}px`;
    
    if (resultsListDom) {
        resultsListDom.style.height = `${resultListHeight}px`;
    }

    if (errorDom) {
        errorDom.style.height = `${resultListHeight}px`;
    }
}