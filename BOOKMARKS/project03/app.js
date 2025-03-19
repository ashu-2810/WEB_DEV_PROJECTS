const rating = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendbtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "staisfied"

// attach events
ratingsContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendbtn.addEventListener("click", () => {
    pannel.innerHTML = `
    <p class="heart">💕</p>
    <stong>Thank You</stong>
    <br>
    <strong>Feedback:${selectedRating}</strong>`
})
function removeActive() {
    for (let i = 0; i < rating.length; i++) {
        rating[i].classList.remove("active");
    }
}