const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("#menuBtn");

let check = 0;

btn.addEventListener('click', () => {
    if (check == 0) {
        sidebar.classList.toggle("hide");
        btn.innerHTML = `<i class="ri-close-line"></i>`;
        check = 1;
    } else {
        sidebar.classList.toggle("hide");
        btn.innerHTML = `<i class="ri-menu-line"></i>`;
        check = 0;
    }
});