const loadingBarsLength = 3

const Loading = () => {
    const element = document.createElement("div")
    element.className = "bs-loading"

    for (let index = 0; index < loadingBarsLength; index++) {
        const bar = document.createElement("div")
        bar.className = "bs-loading__bar"
        element.append(bar)
    }

    return element
}

export default Loading