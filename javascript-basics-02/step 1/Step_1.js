let target = document.querySelector('img');
target.addEventListener("mouseover", changeImage, false);
function changeImage() {
    document.getElementById("image1").src = "images/image1_2.jpg";
}