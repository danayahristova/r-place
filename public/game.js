let map;
function init() {
    map = [];
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", onMapLoad);
    xmlhttp.open("GET", "http://localhost:3000/map");
    xmlhttp.send();
}

function onMapLoad(obj) {
    console.log(JSON.parse(obj.currentTarget.responseText));
    map = JSON.parse(obj.currentTarget.responseText);
}
function update() {
    
}
function draw() {
    
}
function mouseup() {
    
}
function keyup(key) {
    
}
