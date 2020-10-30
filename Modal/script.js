const btnModalClose = document.getElementById("modal-close");
const btnModalOpen = document.getElementById("modal-open");
const modal = document.getElementById("modal");

btnModalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

btnModalOpen.addEventListener("click", () => {
    modal.style.display = "flex";
});
