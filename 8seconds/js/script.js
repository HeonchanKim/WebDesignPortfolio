window.addEventListener("load",function () {
    setTimeout(function () {
        scrollTo(0,0)
    }, 10);
    //-----------------------------------------------------------------------------------------------------
    // 헤더
    const header = document.querySelector("#header");
    const logo = document.querySelector("#logo > a > img");
    const duration = 500;

    // 헤더 hover 이벤트
    header.addEventListener("mouseenter", headerChange);
    header.addEventListener("mouseleave", headerRemove);
    
    window.addEventListener("scroll", function(event) {
        event.preventDefault();
        if(window.scrollY > 0){
            headerChange();
        }
        else{
            headerRemove()
        }
    });
    
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
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
});