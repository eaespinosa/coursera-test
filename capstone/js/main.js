document.getElementById("sideNav").addEventListener("click", toggleNav);

function toggleNav(){
    navSize = document.getElementById("mobileNav").style.width;
    if (navSize == "200px") {
        return close();
    }
    return open();
}
function open() {
        document.getElementById("mobileNav").style.width = "200px";
        document.getElementById("main-content").style.marginLeft = "200px";
}
function close() {
        document.getElementById("mobileNav").style.width = "0";
        document.getElementById("main-content").style.marginLeft = "0";
}

var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
	Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
	item.addEventListener("click", event => {
	modalEle.style.display = "block";
	modalImage.src = event.target.src;
});
});
	document.querySelector(".close").addEventListener("click", () => {
	modalEle.style.display = "none";
});
