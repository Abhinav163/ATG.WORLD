const dropdownIcon = document.getElementById('drop');
const logoutDiv = document.getElementById('out');

dropdownIcon.addEventListener('mouseover', function() {
    logoutDiv.style.display = 'block';
    setTimeout(function() {
        logoutDiv.style.display = 'none';
    }, 10000);
});

dropdownIcon.addEventListener('mouseout', function() {
    logoutDiv.style.display = 'none';
});

function changeText() {
    var span = document.getElementById("f");
    span.textContent = "followed";
}
function changeText1() {
    var span = document.getElementById("f1");
    span.textContent = "followed";
}function changeText2() {
    var span = document.getElementById("f2");
    span.textContent = "followed";
}function changeText3() {
    var span = document.getElementById("f3");
    span.textContent = "followed";
}
function hide(){
    document.getElementById("sform").style.display = "none";
    document.getElementById("ico").style.display="none";
    // document.getElementById("contain").style.opacity = 1;
    window.location.href ="./index.html";
}
function login(){
    window.location.href = "./loged.html";
}