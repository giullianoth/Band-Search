const modalElement = ({ videoTitle, videoUrl }) => {
    let modal = document.createElement("div");
    modal.className = "bs_modal j_modal";

    modal.innerHTML = `
    <section>
    <button class="close_modal" title="Fechar"><i class="fa-solid fa-xmark"></i></button>
    <div class="bs_modal_content">
    <div class="bs_modal_content_embedded"><iframe id="ytplayer" type="text/html" width="640" height="360" autoplay="" src="https://www.youtube.com/embed/${videoUrl}" frameborder="0" allowfullscreen=""></iframe></div>
    <header class="bs_modal_content_title"><h2>${videoTitle}</h2></header>
    </div>
    </section>
    `;

    return modal;
}

const closeModal = () => {
    let modal = document.querySelector(".j_modal");
    modal.remove();
}

const videoModal = () => {
    const videoItems = document.querySelectorAll(".j_results_list_item");

    videoItems.forEach((item) => {
        let videoUrl = item.dataset.url;
        let videoTitle = item.querySelector("h2").innerText;
        let videoItemClickable = item.querySelectorAll(".open_modal");

        videoItemClickable.forEach((itemClick) => {
            itemClick.addEventListener("click", () => {
                document.body.prepend(modalElement({videoTitle, videoUrl}));
                document.querySelector(".close_modal").addEventListener("click", closeModal);
            })
        })
    })
}

export default videoModal;