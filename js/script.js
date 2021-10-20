window.addEventListener("load", function () {
    const skill = document.querySelectorAll(".skill_item > li > span > span");
    
    const page3Slide1= document.getElementById("page3_slide1");
    const page3Slide2= document.getElementById("page3_slide2");

    function doSlide() {
        page3Slide1.style.marginRight = "1200px";
        page3Slide1.style.transition = "600ms";

        window.setTimeout(function () {
            page3Slide1.appendChild()
            page3Slide1.removeAttribute("style");
        }, 600)
    }
});