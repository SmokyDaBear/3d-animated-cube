const videoEmbed = `  <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NdftnCDwKaU?si=7h9VbTdZJAPxUwLt"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>`;

const openVideoBtn = document.getElementById("open-modal");
const closeVideoBtn = document.getElementById("close-modal");

const modalContainer = document.getElementById("modal-container");
const videoContainer = document.getElementById("video-container");

openVideoBtn.addEventListener("click", () => {
  videoContainer.innerHTML = videoEmbed;
  modalContainer.classList.add("active");
});

closeVideoBtn.addEventListener("click", () => {
  videoContainer.innerHTML = "";
  modalContainer.classList.remove("active");
});
