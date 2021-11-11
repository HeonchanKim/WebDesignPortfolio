window.addEventListener("load",function () {
    //-----------------------------------------------------------------------------------------------------
    // 헤더
    const header = document.querySelector("#header");
    const logo = document.querySelector("#logo > a > img");
    const duration = 500;

    // 헤더 hover 이벤트
    header.addEventListener("mouseenter", headerChange);
    header.addEventListener("mouseleave", headerRemove);
    
    

    // 헤더 mouseenter/mouseleave 함수
    function headerChange() {
        console.log("asbdsf")
        header.style.backgroundColor = "#ac1f2d";
        header.style.transitionDuration = duration+"ms";
        logo.setAttribute("src", "./images/mainLogosub.png");

    }
    function headerRemove() {
        header.style.backgroundColor = "";
        header.style.transitionDuration = duration+"ms";
        logo.setAttribute("src", "./images/mainLogo.png");

    }
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
});