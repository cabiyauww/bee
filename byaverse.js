document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".certificate img, .project img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            const popup = document.createElement("div");
            popup.classList.add("image-popup");

            const popupImage = document.createElement("img");
            popupImage.src = image.src;
            popupImage.alt = image.alt;

            popup.appendChild(popupImage);
            document.body.appendChild(popup);

            popup.addEventListener("click", function () {
                popup.remove();
            });
        });
    });
});