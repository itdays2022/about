const loadImg = document.querySelectorAll(".gallery-image");
const btn = document.getElementById("load");
let count = 0;
function loadMore() {
  count += 1;
  loadImg[count].classList.add("active");

  if (count === loadImg.length - 1) {
    btn.style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("img-item")) {
    var src = e.target.getAttribute("src");
    document.querySelector(".img-modal").src = src;
    const myModal = new bootstrap.Modal(document.getElementById("modal"));
    myModal.show();
  }
});
