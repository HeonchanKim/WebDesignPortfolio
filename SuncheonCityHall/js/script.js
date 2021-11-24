window.addEventListener("load", function () {
    /* --------------------------------------------------------------------------------------------------------------------------*/
    const aTag = document.getElementsByTagName("a");
    
    for(let A = 0; A < aTag.length; A++){
        aTag[A].addEventListener("click", function (event){
            if(aTag[A].getAttribute("href") == "#")
                event.preventDefault();
        });
    }
    /* --------------------------------------------------------------------------------------------------------------------------*/

    let timerId1;
    let timerId3;

    // 유틸리티 토글기능
    let slideUp = function (target, duration) {
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.boxSizing = "border-box";
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
        target.offsetHeight;
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
    let slideToggle1 = function (target, duration) {
        window.clearTimeout(timerId1);
        if (window.getComputedStyle(target).display === "none") {
            document.querySelector(".languageButton").style.transform = "rotate(180deg)";
            document.querySelector(".languageButton").style.transitionDuration = duration + "ms";
            return slideDown(target, duration);
        } else {
            document.querySelector(".languageButton").style.transform = "rotate(0deg)";
            document.querySelector(".languageButton").style.transitionDuration = duration + "ms";
            return slideUp(target, duration);
        }
    }
    
    
    const durationSpeed = 400;
    const targetId = document.querySelector(".languageSub");
    
    let slideClick = function(arg, func) {
        document.querySelector(arg).addEventListener("click", function () {
            return func(targetId, durationSpeed);
        });
    }
    
    
    // 유틸리티 마우스리브 이벤트
    targetId.addEventListener("mouseleave", function () {
        slideToggle1(targetId, durationSpeed);
    });

    // 유틸리티 클릭 이벤트
    slideClick(".langButton", slideToggle1);

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
    const Bullet = document.querySelector(".slideBullet > ul");
    const slideBullet = document.querySelectorAll(".slideBullet > ul > li > a");
    const slideLeftButton = document.querySelector(".slideLeftButton");
    const slideRightButton = document.querySelector(".slideRightButton");
    const slideStart = document.querySelector(".slideStart");
    let mainSlideCount = document.querySelectorAll(".mainSlide > ul > li").length;
    let index = 0;
    const offsetTime = 3000;
    const duration = 600;

    // 슬라이드 클릭 이벤트
    slideRightButton.addEventListener("click", function () {
        if(mainSlide.style.left == "-100%" || mainSlide.style.transitionDuration == duration + "ms") return false;
        window.clearInterval(timerId4);
        doSlideRight();
    });
    slideLeftButton.addEventListener("click", function () {
        if(mainSlide.style.transitionDuration == duration + "ms") return false;
        window.clearInterval(timerId4);
        doSlideLeft();
    });
    slideStart.addEventListener("click", function () {
        this.classList.toggle("stopOn");
        if(this.classList.contains("stopOn")){
            window.clearInterval(timerId4);
        }
        else{
            timerId4 = window.setInterval(doSlideRight, offsetTime);
        }
    });
    
    // 슬라이드 후버 이벤트
    mainSlide.addEventListener("mouseenter",function () {
        window.clearInterval(timerId4);
    });
    mainSlide.addEventListener("mouseleave",function () {
        slideStart.classList.remove("stopOn");
        timerId4 = window.setInterval(doSlideRight, offsetTime);
    });

    Bullet.addEventListener("mouseenter",function () {
        window.clearInterval(timerId4);
    });
    
    let timerId4 = window.setInterval(doSlideRight, offsetTime);

    // 불릿 클릭 이벤트
    for(let m = 0; m < slideBullet.length; m++){
        slideBullet[m].addEventListener("click", function (event) {
            event.preventDefault();
            if(mainSlide.style.transitionDuration == duration + "ms") return false;
            // window.clearInterval(timerId4);
            let clickedIndex = m;
            
            // 현재 a요소와 클릭된 a요소의 차이
            let step = clickedIndex - index;
            if(step == 0) return false;

            for(let q = 0; q < slideBullet.length; q++){
                slideBullet[q].classList.remove("on");
            }
            index = clickedIndex;
            slideBullet[index].classList.add("on");
            
            if(step > 0) {
                mainSlide.style.left = step * (-100) + "%";
                mainSlide.style.transitionDuration = duration + "ms";
                window.setTimeout(function() {
                    if(mainSlide.style.left == "-100%"){
                        mainSlide.appendChild(mainSlide.firstElementChild);
                    }
                    else{
                        mainSlide.append(mainSlide.children[0], mainSlide.children[1]);
                    }
                    mainSlide.removeAttribute("style");
                }, duration);
            }else{
                if(step == -1){ mainSlide.prepend(mainSlide.lastElementChild);}
                else{mainSlide.prepend(mainSlide.children[1], mainSlide.children[2]);}
                mainSlide.style.left = step * 100 + "%";
                
                window.setTimeout(function () {
                    mainSlide.style.left = "0";
                    mainSlide.style.transitionDuration = duration + "ms";
                }, 10);
                window.setTimeout(function () {
                    mainSlide.removeAttribute("style");
                }, duration); // settimeout
            }
        });
    }

    // 오른쪽 슬라이드함수
    function doSlideRight() {
        index++;
        index %= mainSlideCount;
        
        mainSlide.style.left = "-100%";
        mainSlide.style.transitionDuration = duration + "ms";
        window.setTimeout(function () {
            mainSlide.appendChild(mainSlide.firstElementChild)
            mainSlide.removeAttribute("style");
        }, duration);
        
        for(let n = 0; n < slideBullet.length; n++){
            slideBullet[n].classList.remove("on");
        }

        slideBullet[index].classList.add("on");
    }

    function doSlideLeft() {
        index--;
        if(index < 0) index = 2;
        mainSlide.insertBefore(mainSlide.lastElementChild, mainSlide.firstElementChild)
        mainSlide.style.left = "-100%";
        window.setTimeout(function () {
            mainSlide.style.left = "0";
            mainSlide.style.transitionDuration = duration + "ms";
        }, 10);
        window.setTimeout(function () {
            mainSlide.removeAttribute("style");
        }, duration);

        for(let n = 0; n < slideBullet.length; n++){
            slideBullet[n].classList.remove("on");
        }

        slideBullet[index].classList.add("on");
    }
    // ---------------------------------------------------------------------------------------------
    //QuickMenu
    const quickLeft = document.querySelector(".quickLeft");
    const quickRight = document.querySelector(".quickRight");
    const quickList = document.querySelector(".quickList");

    quickRight.addEventListener("click", function () {
        if(quickList.style.left == "-240px") return
        doSlideQuickRight();
    });
    quickLeft.addEventListener("click", function () {
        if(quickList.style.transitionDuration == "400ms") return
        doSlideQuickLeft();
    });

    // 오른쪽 슬라이드 함수
    function doSlideQuickRight() {
        quickList.style.left = "-240px";
        quickList.style.transition = "400ms";
        window.setTimeout(function () {
            quickList.removeAttribute("style");
            quickList.appendChild(quickList.firstElementChild);
        }, 400);
    }

    // 왼쪽 슬라이드 함수
    function doSlideQuickLeft() {
        quickList.removeAttribute("style");
        quickList.insertBefore(quickList.lastElementChild, quickList.firstElementChild);
        quickList.style.left = "-240px";
        window.setTimeout(function () {
            quickList.style.transition = "400ms";
            quickList.style.left = "-120px";
        }, 10);
        window.setTimeout(function () {
            quickList.removeAttribute("style");
        }, 400);
    }
    // ---------------------------------------------------------------------------------------------
    // notice
    const notice = document.querySelectorAll(".notice > ul > li");
    const noticeA = document.querySelectorAll(".notice > ul > li > a");
    const noticeSpan = document.querySelectorAll(".notice > ul > li > a > span");
    const noticeSub = document.querySelectorAll(".noticeSub");

    for(let u = 0; u < notice.length; u++){
        notice[u].addEventListener("mouseenter", function () {
            noticeA[u].classList.add("noticeOn");
            noticeSpan[u].style.display = "none";
            noticeSub[u].style.display = "block"
            for(let bcd = 0; bcd < noticeA.length;bcd++){
                if(noticeA[bcd].classList.contains("noticeOn") === true){
                    noticeA[bcd].classList.remove("noticeOn");
                    noticeSpan[bcd].style.display = "block";
                    noticeSub[bcd].style.display = "none"
                    noticeA[u].classList.add("noticeOn");
                    noticeSpan[u].style.display = "none";
                    noticeSub[u].style.display = "block"
                }
            }
        });
        notice[u].addEventListener("mouseleave", function () {
            noticeA[u].classList.remove("noticeOn");
            noticeSpan[u].style.display = "block";
            noticeSub[u].style.display = "none"
            for(let g = 0; g < noticeA.length; g++){
                if(noticeA[g].classList.contains("noticeOn") != true){
                    noticeA[u].classList.add("noticeOn");
                    noticeSpan[u].style.display = "none";
                    noticeSub[u].style.display = "block";
                }
            }
        });
    }

    // ---------------------------------------------------------------------------------------------
    // suncheonNews
    const newsList = document.querySelector(".newsList");
    const newsListLi = document.querySelectorAll(".newsList > li");
    const newsListImg = document.querySelectorAll(".newsList > li > a > img");
    const newsRight = document.querySelector(".newsright");
    const newsLeft = document.querySelector(".newsLeft");
    let timerId2;
    
    // 슬라이드 클릭 이벤트
    newsRight.addEventListener("click", function() {
        if(newsList.style.left == "-690px") return
        window.clearInterval(timerId2);
        doSlideNewsRight();
        timerId2 = window.setInterval(doSlideNewsRight, offsetTime);
    });
    newsLeft.addEventListener("click", function () {
        if(newsList.style.transitionDuration == duration + "ms") return
        window.clearInterval(timerId2);
        doSlideNewsLeft();
        timerId2 = window.setInterval(doSlideNewsRight, offsetTime);
    });

    // 슬라이드 후버 멈춤 이벤트
    newsList.addEventListener("mouseenter", function () {
        window.clearInterval(timerId2);
    });
    newsList.addEventListener("mouseleave", function () {
        timerId2 = window.setInterval(doSlideNewsRight, offsetTime);
    });
    for(let p = 0; p < newsListLi.length; p++){
        newsListLi[p].addEventListener("mouseenter", function () {
            newsListImg[p].style.opacity = "0.6";
            newsListImg[p].style.transitionDuration = duration + "ms";
        });
        newsListLi[p].addEventListener("mouseleave", function () {
            newsListImg[p].style.opacity = "1";
            newsListImg[p].style.transitionDuration = duration + "ms";
        });
    }

    timerId2 = window.setInterval(doSlideNewsRight, offsetTime);

    // 슬라이드 함수
    function doSlideNewsRight() {
        newsList.style.left = "-690px";
        newsList.style.transitionDuration = duration + "ms";
        window.setTimeout(function () {
            newsList.removeAttribute("style");
            newsList.appendChild(newsList.firstElementChild);
        }, duration);
    }
    function doSlideNewsLeft() {
        newsList.removeAttribute("style");
        newsList.insertBefore(newsList.lastElementChild, newsList.firstElementChild);
        newsList.style.left = "-690px";
        window.setTimeout(function () {
            newsList.style.left = "-330px";
            newsList.style.transitionDuration = duration + "ms";
        }, 10);
        window.setTimeout(function () {
            newsList.removeAttribute("style");
        }, duration);
    }
    // ---------------------------------------------------------------------------------------------
    // touristAttraction
    const touristAttraction = document.querySelector(".touristAttraction > h4");

    touristAttraction.addEventListener("mouseenter", function () {
        this.style.transitionDuration = "400ms";
        this.style.transform = "scale(1.05)";
    });
    touristAttraction.addEventListener("mouseleave", function () {
        this.style.transitionDuration = "400ms";
        this.style.transform = "scale(1)";
    });
    
    // ---------------------------------------------------------------------------------------------
    // footer
    const ftButton2= document.querySelector(".ftButton2");
    const ftButton3= document.querySelector(".ftButton3");
    const ftSub1 = document.querySelector(".ftSub1");
    const ftSub2 = document.querySelector(".ftSub2");
    const ftTopLi = this.document.querySelectorAll(".ftTop > ul > li");
    const ftTop = document.querySelectorAll(".ftTop > ul > li > a");

    for (let b = 0; b < ftTop.length; b++){
        ftTop[b].addEventListener("click", function (event) {
            event.preventDefault();
        });
    }

    ftTopLi[1].addEventListener("click", function () {
        ftSub1.classList.toggle("reverseToggleSub1");
        ftButton2.classList.toggle("ftButtonToggle");
    });
    ftSub1.addEventListener("mouseleave", function () {
        this.classList.remove("reverseToggleSub1");
        ftButton2.classList.toggle("ftButtonToggle");
    });
    ftTopLi[2].addEventListener("click", function () {
        ftSub2.classList.toggle("reverseToggleSub1");
        ftButton3.classList.toggle("ftButtonToggle");
    });
    ftSub2.addEventListener("mouseleave", function () {
        this.classList.remove("reverseToggleSub1");
        ftButton3.classList.toggle("ftButtonToggle");
    });
    // ---------------------------------------------------------------------------------------------
}); 