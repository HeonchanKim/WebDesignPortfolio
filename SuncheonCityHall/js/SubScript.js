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
    
    // ---------------------------------------------------------------------------------------------
    // searchBlock
    const targetId3 = document.querySelector(".keywordTop10");
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
    // ---------------------------------------------------------------------------------------------
    // sidebar
    const sidebar = document.querySelectorAll("#sidebar > ul > li > a");
    const sidebarSub = document.querySelectorAll("#sidebar > ul > li > .sidebarSub");
    
    let slideUp3 = function (target, duration) {
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
        
        timerId3 = window.setTimeout(removeSlideUp, duration);

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

    let slideDown3 = function (target, duration) {
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
        
        timerId3= window.setTimeout(removeSlideDown, duration);

        function removeSlideDown() {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
        }
    }



    for(let q = 0; q < sidebar.length; q++){
        sidebar[q].addEventListener("click", function (event) {
            event.preventDefault();
            window.clearTimeout(timerId3);
            if (window.getComputedStyle(sidebarSub[q]).display === "none") {
                if(sidebarSub[q].children.length >= 1){
                    sidebar[q].style.backgroundColor = "#f6f6f6";
                    sidebar[q].style.transitionDuration = "500ms";
                }
                return slideDown3(sidebarSub[q], 500);
            }
            else {
                sidebar[q].removeAttribute("style");
                sidebar[q].style.backgroundColor = "white";
                sidebar[q].style.transitionDuration = "500ms";
                return slideUp3(sidebarSub[q], 500);
            }
        });
    }
        
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