window.addEventListener("load",function () {
    // setTimeout(function () {
    //     scrollTo(0,0)
    // }, 10);
    const aTag = document.getElementsByTagName("a");
    
    for(let A = 0; A < aTag.length; A++){
        aTag[A].addEventListener("click", function (event){
            if(aTag[A].getAttribute("href") == "#")
                event.preventDefault();
        });
    }
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
    header.addEventListener("mouseenter", function () {
        headerChange();
        this.classList.add("opacityHeader");
    });
    header.addEventListener("mouseleave", function () {
        headerRemove();
        this.classList.remove("opacityHeader");
    });
    
    window.addEventListener("scroll", function(event) {
        event.preventDefault();
        if(window.pageYOffset > 0 || subWomen.classList.contains("on") || subMen.classList.contains("on")|| header.classList.contains("opacityHeader")){
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

    // 헤더 mouseenter/mouseleave 함수
    function headerChange() {
        header.classList.add("headerOn");
        logo.setAttribute("src", "./images/mainLogosub.png");
        
    }
    function headerRemove() {
        if(window.scrollY > 0){
            headerChange();
        }
        else{
            header.classList.remove("headerOn");
            logo.setAttribute("src", "./images/mainLogo.png");
        }
    }
    //------------------------------------------------------------------------------------------------------
    // 메인 슬라이드
    const mainSlide = document.querySelector(".mainSlide");
    const slideLeft = document.querySelector(".slideLeft");
    const slideRight = document.querySelector(".slideRight");
    const offsetTime = 5000;

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
    // WeeklyBest
    const bestList = document.querySelectorAll(".bestList > li");
    const bestListA = document.querySelectorAll(".bestList > li > a");
    const listSub = document.querySelectorAll(".listSub");
    const BestCheckHeart = document.querySelectorAll(".BestCheckHeart");

    // 상품목록별 베스트 상품 보기 이벤트
    for(let a = 0; a < bestList.length; a++){
        bestList[a].addEventListener("click", function () {
            for(let aa = 0; aa < listSub.length; aa++){
                listSub[aa].classList.remove("on");
                bestListA[aa].classList.remove("checkedText");
            }
            listSub[a].classList.toggle("on");
            bestListA[a].classList.toggle("checkedText");
        });
    }

    // 찜하기 기능 이벤트
    for(let s = 0; s < BestCheckHeart.length; s++){
        BestCheckHeart[s].addEventListener("click", function () {
            BestCheckHeart[s].classList.toggle("checkHeartBest");
        });
    }
    //------------------------------------------------------------------------------------------------------
});