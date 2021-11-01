window.addEventListener("load", function () {
    let timerId1;

    // 유틸리티 토글기능
    let slideUp = function (target, duration) {
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        // target.style.boxSizing = "border-box";
        target.style.height = target.offsetHeight + "px";

        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        
        timerId1 = window.setTimeout(removeSlideUp, duration);

        function removeSlideUp() {
            target.style.display = "none";
            target.style.removeProperty("height");
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
        }
    }

    let slideDown = function (target, duration) {
        target.style.removeProperty("display");
        let display = window.getComputedStyle(target).display;
        
        if (display === "none")
        display = "block";
        
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0; 
        target.style.paddingBottom = 0; 
        target.style.marginTop = 0; 
        target.style.marginBottom = 0; 
        target.style.boxSizing = "border-box";
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        
        timerId1= window.setTimeout(removeSlideDown, duration);

        function removeSlideDown() {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
        }
    }

    let slideToggle = function (target, duration) {
        window.clearTimeout(timerId1);
        if (window.getComputedStyle(target).display === "none") {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
    }

    const durationSpeed = 400;
    const targetId = document.querySelector(".languageSub");
    const targetId2 = document.querySelectorAll(".languageSub > li > a");
    
    let slideClick = function(arg, func) {
        document.querySelector(arg).addEventListener("click", function () {
            return func(targetId, durationSpeed);
        });
    }
    
    // 유틸리티 마우스리브 이벤트
    targetId.addEventListener("mouseleave", function () {
        slideToggle(targetId, durationSpeed);
    });

    // 유틸리티 클릭 이벤트
    slideClick(".languageButton", slideToggle);

    // 유틸리티 마우스 후버효과
    for(let k = 0; k < targetId2.length;k++){
        targetId2[k].addEventListener("mouseenter", function () {
            this.style.display = "block";
            this.style.backgroundColor = "rgb(240, 240, 240)";
        })
        targetId2[k].addEventListener("mouseleave", function () {
            this.removeAttribute("style");
        })
    }
    // ----------------------------------------------------------------------------------
    // 네비게이션
    
    const navAll = document.querySelectorAll("#nav > ul > li > a");
    const nav = document.querySelectorAll("#nav > ul > li");
    const navSub = document.querySelectorAll("#nav > ul > li > .sub");
    const navSubList = document.querySelectorAll("#nav > ul > li > .sub > li");
    const navTitle = document.querySelectorAll("#nav > ul > li > .subTitle");
    const navSubSub = document.querySelectorAll("#nav > ul > li > .sub > li > .subSub");
    const navSubSubList = document.querySelectorAll("#nav > ul > li > .sub > li > .subSub > li");

    for(let i = 0; i < nav.length; i++){
        nav[i].addEventListener("mouseenter", function () {
            navAll[i].style.color = "#1471ac";
            navAll[i].style.fontWeight = "700";
            navSub[i].style.display = "block";
            navTitle[i].style.display = "block";
            navSubSub[i].style.display = "block";
        });
        nav[i].addEventListener("mouseleave", function () {
            navAll[i].removeAttribute("style");
            navSub[i].removeAttribute("style");
            navTitle[i].removeAttribute("style");
        })
        for(let j = 0; j < navSubList.length; j++){
            navSubList[j].addEventListener("mouseenter", function () {
                this.style.fontWeight = "700";
                this.style.fontSize = "15.5px"
            });
            navSubList[j].addEventListener("mouseleave", function () {
                this.removeAttribute("style");
            });
        }
        for(let l = 0; l < navSubSubList.length; l++){
            navSubSubList[l].addEventListener("mouseenter" ,function () {
                this.style.fontWeight = "400";
            });
            navSubSubList[l].addEventListener("mouseleave" ,function () {
                this.removeAttribute("style");
            });
        }
    }
    // ------------------------------------------------------------------------------------------------
    // searchBlock
    const targetId3 = document.querySelector(".keywordTop10");
    const todayKeyword = document.querySelectorAll(".todayKeyword > li");
    const firstBlockKeyword = document.querySelectorAll(".firstBlockKeyword > li");
    const secondBlockKeyword = document.querySelectorAll(".secondBlockKeyword > li");

    // 메뉴 클릭 함수
    let slideClick3 = function(arg, func) {
        document.querySelector(arg).addEventListener("click", function () {
            return func(targetId3, durationSpeed);
        });
    }
    slideClick3(".MenuTab", slideToggle);

    // 마우스 리브 이벤트
    targetId3.addEventListener("mouseleave", function () {
        slideToggle(targetId3, durationSpeed);
    });

    
    // 오늘의 키워드 마우스 후버 이벤트
    for(let t = 1; t < todayKeyword.length; t++){
        todayKeyword[t].addEventListener("mouseenter", mouseEnter);
        todayKeyword[t].addEventListener("mouseleave", mouseLeave);
    }
    
    
    function mouseEnter() {
        this.style.fontWeight = "400";
    }
    function mouseLeave() {
        this.removeAttribute("style");
    }
    let KeywordHoverEvent = function (target) {
        for(let y = 0; y < target.length; y++){
            target[y].addEventListener("mouseenter", mouseEnter);
            target[y].addEventListener("mouseleave", mouseLeave);
        }
    }
    
    KeywordHoverEvent(firstBlockKeyword);
    KeywordHoverEvent(secondBlockKeyword);



    // ------------------------------------------------------------------------------------------------
    // mainSlide
    const mainSlide = document.querySelector(".mainSlide > ul");
    const slideBullet = document.querySelectorAll(".slideBullet > ul > li > a");
    let index = 0;
    let mainSlideCount = document.querySelectorAll(".mainSlide > ul > li").length;
    const offsetTime = 3000;
    const duration = 600;

    window.setInterval(doSlideRight, offsetTime);

    for(let m = 0; m < slideBullet.length; m++){
        slideBullet[m].addEventListener("click", function (event) {
            event.preventDefault();
            let clickedIndex = m;

            // 현재 a요소와 클릭된 a요소의 차이
            let step = clickedIndex - index

            if(step == 0) return;
            index = clickedIndex;
            
            for(let q = 0; q < slideBullet.length; q++){
                slideBullet[q].classList.remove("on");
            }
            slideBullet[index].classList.add("on");

            if(step > 0) {
                mainSlide.style.left = step * (-100) + "%";
                mainSlide.style.transitionDuration = duration + "ms";
                window.setTimeout(function () {
                    for(let w = 0; w < mainSlide.length; w++){
                        mainSlide.removeAttribute("style");
                        mainSlide.append(mainSlide.children.item(m < step));
                    }
                }, duration);
            }else{
                let e = (mainSlideCount - 1) + step;
                for(let r = 0; r < mainSlide.length; r++){
                    mainSlide.children.item(r > e).prepend(mainSlide);
                    mainSlide.style.left = step * 100 + "%";
                }
                window.setTimeout(function () {
                    mainSlide.style.left = 0;
                }, 1); // settimeout
            }
        });
    }

    // 오른쪽 슬라이드함수
    function doSlideRight() {
        for(let n = 0; n < slideBullet.length; n++){
            slideBullet[n].classList.remove("on");
        }
        mainSlide.style.left = "-100%";
        mainSlide.style.transitionDuration = duration + "ms";
        window.setTimeout(function () {
            mainSlide.appendChild(mainSlide.firstElementChild)
            mainSlide.removeAttribute("style");
        }, duration);
        index++;
        index %= mainSlideCount;
        slideBullet[index].classList.add("on");
    }

    function doSlideLeft() {
        mainSlide.removeAttribute("style");
        mainSlide.insertBefore(mainSlide.lastElementChild, mainSlide.firstElementChild)
        mainSlide.style.left = "-100%";
        window.setTimeout(function () {
            mainSlide.style.left = "0";
            mainSlide.style.transitionDuration = duration + "ms";
        }, duration);
    }

    function bullet() {
        slideBullet[index].style.backgroundColor = "#1471ac";
        window.setTimeout(function () {
            slideBullet[index].removeAttribute("style");
            index++;
        }, duration);
    }




}); 