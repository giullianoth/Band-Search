export default function setViewport() {

    let headerHeight = document.querySelector("body > header").offsetHeight;
    let footerHeight = document.querySelector("body > footer").offsetHeight;
    let windowHeight = window.innerHeight;

    let mainDom = document.querySelector(".j_main");

    mainDom.style.height = `${windowHeight - headerHeight - footerHeight}px`;
}