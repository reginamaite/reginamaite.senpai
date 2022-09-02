// MODAL //
var btn = document.getElementById("buttonNav");
var modal = document.getElementById("myModal");
var equis = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}

equis.onclick = function(){
    modal.style.display = "none";
}
