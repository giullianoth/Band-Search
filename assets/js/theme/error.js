const error = (message) => {
    let errorElement = document.createElement("section");
    errorElement.className = "bs_main_content_error j_error";
    errorElement.innerHTML = `<p>${message}</p>`;

    return errorElement;
}

export default error;