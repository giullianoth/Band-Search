const animationTime = 500;
const animationTimeGap = 100;

const transition = `all ${animationTime / 1000}s ease`;

const fadeIn = (element, elementDisplay = "block") => {
    element.style.transition = transition;
    element.style.display = elementDisplay;
    element.style.opacity = "0";

    setTimeout(() => {
        element.style.opacity = "";
        setTimeout(() => {
            element.style.transition = "";
        }, animationTime + animationTimeGap);
    }, animationTimeGap);
}

const fadeOut = (element) => {
    element.style.transition = transition;
    element.style.opacity = "0";

    setTimeout(() => {
        element.style.transition = "";
        element.style.display = "";
    }, animationTime);
}

export { fadeIn, fadeOut };