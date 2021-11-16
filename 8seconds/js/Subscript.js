window.addEventListener("load", function () {

    
    const aTag = document.getElementsByTagName("a");
    
    for(let A = 0; A < aTag.length; A++){
        aTag[A].addEventListener("click", function (event){
            if(aTag[A].getAttribute("href") == "#")
                event.preventDefault();
        });
    }
    //-----------------------------------------------------------------------------------------------------
    // 헤더
    const nav = document.querySelector("#nav > ul");
    const subWomen = document.querySelector(".subWomen");
    const subMen = document.querySelector(".subMen");
    const topIcon = document.querySelectorAll("#topIcon > li");
    const shadowScreen = document.querySelector(".shadowScreen");
    const duration = 500;

    nav.children[3].addEventListener("mouseenter", function () {
        subWomen.classList.add("on");
        shadowScreen.classList.add("shadowOn");
    });
    nav.children[3].addEventListener("mouseleave", function () {
        subWomen.classList.remove("on");
        shadowScreen.classList.remove("shadowOn");
    });

    nav.children[4].addEventListener("mouseenter", function () {
        subMen.classList.add("on");
        shadowScreen.classList.add("shadowOn");
    });
    nav.children[4].addEventListener("mouseleave", function () {
        subMen.classList.remove("on");
        shadowScreen.classList.remove("shadowOn");
    });    

    // 네비게이션 서브메뉴 이벤트
    for(let j = 0; j < nav.children.length; j++){
        nav.children[j].addEventListener("click", function(event) {event.preventDefault();});
    }

    // topIcon opacity 이벤트
    for(let i = 0; i < topIcon.length; i++){
        topIcon[i].addEventListener("mouseenter", function () {
            for(let k = 0; k < topIcon.length; k++){
                if(k == i) continue;
                topIcon[k].classList.add("topIconOpacity");
            }
        });
        topIcon[i].addEventListener("mouseleave", function () {
            for(let k = 0; k < topIcon.length; k++){
                if(k == i) continue;
                topIcon[k].classList.remove("topIconOpacity");
            }
        })
    }



});