window.addEventListener("load",function () {
    // setTimeout(function () {
    //     scrollTo(0,0)
    // }, 10);
    //-----------------------------------------------------------------------------------------------------
    // 헤더
    const header = document.querySelector("#header");
    const logo = document.querySelector("#logo > a > img");
    const nav = document.querySelector("#nav > ul");
    const subWomen = document.querySelector(".subWomen");
    const subMen = document.querySelector(".subMen");
    const topIcon = document.querySelectorAll("#topIcon > li");
    const shadowScreen = document.querySelector(".shadowScreen");
    const duration = 500;

    // 네비 hover 이벤트
    header.addEventListener("mouseenter", headerChange);
    header.addEventListener("mouseleave", headerRemove);
    
    window.addEventListener("scroll", function(event) {
        event.preventDefault();
        if(window.pageYOffset > 0 || subWomen.classList.contains("on") || subMen.classList.contains("on")){
            headerChange();
        }
        else{
            headerRemove();
        }
    });
    

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
        topIcon[i].addEventListener("click", function(event){event.preventDefault()});
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

    // 헤더 mouseenter/mouseleave 함수
    function headerChange() {
        header.style.backgroundColor = "#ac1f2d";
        header.style.transitionDuration = duration+"ms";
        logo.setAttribute("src", "./images/mainLogosub.png");

    }
    function headerRemove() {
        if(window.scrollY > 0){
            headerChange();
        }
        else{
            header.style.backgroundColor = "";
            header.style.transitionDuration = duration+"ms";
            logo.setAttribute("src", "./images/mainLogo.png");
        }
    }
    //------------------------------------------------------------------------------------------------------
    // 메인 슬라이드
    const mainSlide = document.querySelector(".mainSlide");
    const slideLeft = document.querySelector(".slideLeft");
    const slideRight = document.querySelector(".slideRight");
    const offsetTime = 5000;

    for(let q = 0; q < mainSlide.children.length; q++){
        mainSlide.children[q].addEventListener("click", function(event) {event.preventDefault();});
    }

    // 슬라이드 좌우버튼 클릭 이벤트
    slideRight.addEventListener("click", function () {
        if(mainSlide.style.left == "-200%") return false;
        window.clearInterval(timerId);
        mainSlideRight();
        timerId = window.setInterval(mainSlideRight, offsetTime);
    });
    slideLeft.addEventListener("click", function () {
        if(mainSlide.style.transitionDuration == duration+"ms") return false;
        window.clearInterval(timerId);
        mainSlideLeft();
        timerId = window.setInterval(mainSlideRight, offsetTime);
    });

    // 슬라이드 후버시 슬라이드 멈춤 이벤트
    mainSlide.addEventListener("mouseenter", function () {
        window.clearInterval(timerId);
    });
    mainSlide.addEventListener("mouseleave", function () {
        timerId = window.setInterval(mainSlideRight, offsetTime);
    });

    let timerId = window.setInterval(mainSlideRight, offsetTime);

    // 오른쪽이동 슬라이드 함수
    function mainSlideRight() {
        mainSlide.style.left ="-200%";
        mainSlide.style.transitionDuration = duration + "ms";
        
        window.setTimeout(function () {
            mainSlide.removeAttribute("style")
            mainSlide.appendChild(mainSlide.firstElementChild);
        }, duration);
    }
    
    // 왼쪽이동 슬라이드 함수
    function mainSlideLeft() {
        mainSlide.style.left ="0";
        mainSlide.style.transitionDuration = duration + "ms";
        
        window.setTimeout(function () {
            mainSlide.removeAttribute("style")
            mainSlide.insertBefore(mainSlide.lastElementChild, mainSlide.firstElementChild)
        }, duration);
    }
    //------------------------------------------------------------------------------------------------------
    //What's NEW
    const whatsNewSlide = document.querySelector(".whatsNewSlide");
    const whatsNewLeft = document.querySelector(".whatsNewLeft");
    const whatsNewRight = document.querySelector(".whatsNewRight");
    const checkHeart = document.querySelectorAll(".checkHeart");
    const viewMore = document.querySelectorAll(".viewMore");

    // 슬라이드 기본이벤트 제거
    for(let w = 0; w < whatsNewSlide.children.length; w++){
        whatsNewSlide.children[w].addEventListener("click",function (event) {event.preventDefault();});
    }

    for(let r = 0; r < viewMore.length; r++){
        viewMore[r].addEventListener("click", function(event) {event.preventDefault();});
    }

    // 찜하기 기능 이벤트
    for(let e = 0; e < checkHeart.length; e++){
        checkHeart[e].addEventListener("click", function () {
            checkHeart[e].classList.toggle("checkedHeart");
        });
    }

    // 슬라이드 버튼클릭 이벤트
    whatsNewRight.addEventListener("click", function () {
        if(whatsNewSlide.style.left == "-400px") return false;
        window.clearInterval(timerId2);
        whatsNewSlideRight();
        timerId2 = window.setInterval(whatsNewSlideRight, offsetTime);
    });
    whatsNewLeft.addEventListener("click", function () {
        if(whatsNewSlide.style.transitionDuration == "300ms") return false;
        window.clearInterval(timerId2);
        whatsNewSlideLeft();
        timerId2 = window.setInterval(whatsNewSlideRight, offsetTime);
    });

    // 슬라이드 후버 이벤트
    whatsNewSlide.addEventListener("mouseenter", function () {
        window.clearInterval(timerId2);
    });
    whatsNewSlide.addEventListener("mouseleave", function () {
        timerId2 = window.setInterval(whatsNewSlideRight, offsetTime);
    });

    let timerId2 = window.setInterval(whatsNewSlideRight, offsetTime);


    function whatsNewSlideRight() {
        whatsNewSlide.removeAttribute("style");
        whatsNewSlide.appendChild(whatsNewSlide.firstElementChild);
        whatsNewSlide.style.left = "0px";
        whatsNewSlide.style.transform = "scale(1)";
        
        window.setTimeout(function () {
            whatsNewSlide.style.transitionDuration = "300ms";
            whatsNewSlide.style.left = "-400px";
        }, 10);
        window.setTimeout(function () {
            whatsNewSlide.style.transitionDuration = "300ms";
            whatsNewSlide.removeAttribute("style");
        }, 300);
    }
    function whatsNewSlideLeft() {
        whatsNewSlide.removeAttribute("style");
        whatsNewSlide.insertBefore(whatsNewSlide.lastElementChild, whatsNewSlide.firstElementChild);
        whatsNewSlide.style.left = "-800px";
        whatsNewSlide.style.transform = "scale(1)";
        
        window.setTimeout(function () {
            whatsNewSlide.style.transitionDuration = "300ms";
            whatsNewSlide.style.left = "-400px";
        }, 10);
        window.setTimeout(function () {
            whatsNewSlide.removeAttribute("style");
        }, 300);
    }

    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
});