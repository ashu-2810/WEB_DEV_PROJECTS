let istatus = document.querySelector("h5");
let addis = document.querySelector("#add");
let check = 0;
addis.addEventListener('click', () => {
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addis.innerHTML="Remove Friend"
        check = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addis.innerHTML="Add Friend"
        check = 0;
    }

})
