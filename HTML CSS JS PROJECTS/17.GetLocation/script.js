let var1 = document.getElementById("demo1");
function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
}

function showLoc(pos) {
    var1.innerHTML = "latitude: " + pos.coords.latitude + "<br>Longitude: " + pos.coords.longitude;
}