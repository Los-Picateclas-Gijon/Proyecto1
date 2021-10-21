document.getElementById("happy").onclick = (a) => {
    document.getElementById("happy").style.color="green";
    document.getElementById("angry").style.color="gray";
} 
document.getElementById("angry").onclick = function() {changeState()};
function changeState() {
    document.getElementById("angry").style.color = "red";
    document.getElementById("happy").style.color="gray";
}