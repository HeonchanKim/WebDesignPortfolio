window.addEventListener("load", function () {
    // ------------------------------------------------------------------------------------------------------
    // 2페이지
    const skill = document.querySelectorAll(".skill_item > li > span > span");

    window.addEventListener("wheel", function() {
        if(window.scrollY >= 800 && window.scrollY < 1700){
            for(let i = 0; i < skill.length; i++){
                skill[i].style.transitionDelay = (i * 0.1) + "s";
                skill[i].style.transitionDuration = "800ms";
                skill[i].style.height = skill[i].dataset.height;
            };
        }else{
            for(let a = 0 ; a < skill.length; a++){
                skill[a].removeAttribute("style");
            }
        }
    })
        
    //-----------------------------------------------------------------------------------------------------
    // 3페이지
    const page3Slide = document.querySelector(".page3Slide");
    const offsetTime = 5000;
    const duration = 500;
    const left1 = document.querySelector(".left1");
    const right1 = document.querySelector(".right1");
    const page3_mouseHoverImage1 = document.querySelector(".page3_mouseHoverImage1 > img");
    const page3_mouseHoverImage2 = document.querySelector(".page3_mouseHoverImage2 > img");
    
    // 슬라이드안 이미지 마우스 후버시 스크롤효과
    // 슬라이드 1페이지 이벤트
    page3_mouseHoverImage1.addEventListener("mouseenter",function () {
        window.setTimeout(function() {
            page3_mouseHoverImage1.style.transitionDuration = "2000ms";
            page3_mouseHoverImage1.style.transitionTimingFunction = "linear"
            page3_mouseHoverImage1.style.top = "-240%";
        },100)
    });
    page3_mouseHoverImage1.addEventListener("mouseleave",function () {
        this.removeAttribute("style");
    });
    // 슬라이드 2페이지 이벤트
    page3_mouseHoverImage2.addEventListener("mouseenter",function () {
        window.setTimeout(function() {
            page3_mouseHoverImage2.style.transitionDuration = "1000ms";
            page3_mouseHoverImage2.style.transitionTimingFunction = "linear"
            page3_mouseHoverImage2.style.top = "-90%";
        },100)
    });
    page3_mouseHoverImage2.addEventListener("mouseleave",function () {
        this.removeAttribute("style");
    });
    
    // 슬라이드 좌우 방향 클릭 이벤트
    right1.addEventListener("click", function () {
        if(page3Slide.style.left == "-100%") return;
        window.clearInterval(timerId);
        nextSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });
    left1.addEventListener("click", function () {
        if(page3Slide.style.left == "-100%") return;
        window.clearInterval(timerId);
        prevSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });

    // 슬라이드 방향버튼 opacity 이벤트
    right1.addEventListener("mouseenter", opacityChange);
    right1.addEventListener("mouseleave", opacityRemove);
    left1.addEventListener("mouseenter", opacityChange);
    left1.addEventListener("mouseleave", opacityRemove);
    
    
    // 슬라이드 후버 이벤트
    page3Slide.addEventListener("mouseenter",function () {
        window.clearInterval(timerId);
    });
    page3Slide.addEventListener("mouseleave",function () {
        timerId = window.setInterval(nextSlide, offsetTime);
    });
    
    let timerId = window.setInterval(nextSlide, offsetTime);
    
    // 3페이지 슬라이드 함수
    function nextSlide() {
        page3Slide.style.left = "-100%";
        page3Slide.style.transition = duration + "ms";
        
        window.setTimeout(function () {
            page3Slide.appendChild(page3Slide.firstElementChild);
            page3Slide.removeAttribute("style");
        }, duration)
    }
    function prevSlide() {
        page3Slide.removeAttribute("style");
        page3Slide.insertBefore(page3Slide.lastElementChild,page3Slide.firstElementChild);
        page3Slide.style.left = "-100%";
        
        window.setTimeout(function () {
            page3Slide.style.transition = duration + "ms";
            page3Slide.style.left = "0";
        }, duration);
    }
    
    // opacity 변경 함수
    function opacityChange() {
        this.style.opacity = "50%";
        this.style.transitionDuration = "300ms";
    }
    function opacityRemove() {
        this.removeAttribute("style");
    }

    //-------------------------------------------------------------------------------------------------------------
    // 4페이지
    const page4Slide = document.querySelector(".page4Slide");
    const left2 = document.querySelector(".left2");
    const right2 = document.querySelector(".right2");
    const page4_mouseHoverImage1 = document.querySelector(".page4_mouseHoverImage1 > img");
    const page4_mouseHoverImage2 = document.querySelector(".page4_mouseHoverImage2 > img");
    
    // 슬라이드안 이미지 마우스 후버시 스크롤효과
    // 슬라이드 페이지1 이벤트
    page4_mouseHoverImage1.addEventListener("mouseenter",function () {
        window.setTimeout(function() {
            page4_mouseHoverImage1.style.transitionDuration = "4000ms";
            page4_mouseHoverImage1.style.transitionTimingFunction = "linear"
            page4_mouseHoverImage1.style.top = "-535%";
        },100)
    });
    page4_mouseHoverImage1.addEventListener("mouseleave",function () {
        this.removeAttribute("style");
    });
    // 슬라이드 페이지2 이벤트
    page4_mouseHoverImage2.addEventListener("mouseenter",function () {
        window.setTimeout(function() {
            page4_mouseHoverImage2.style.transitionDuration = "3500ms";
            page4_mouseHoverImage2.style.transitionTimingFunction = "linear"
            page4_mouseHoverImage2.style.top = "-465%";
        },100)
    });
    page4_mouseHoverImage2.addEventListener("mouseleave",function () {
        this.removeAttribute("style");
    });
    
    // 슬라이드 좌우방향 마우스 클릭 이벤트
    right2.addEventListener("click", function () {
        if(page4Slide.style.left == "-100%") return;
        window.clearInterval(timerId2);
        nextSlide2();
        timerId2 = window.setInterval(nextSlide2, offsetTime);
    });
    left2.addEventListener("click", function () {
        if(page4Slide.style.left == "-100%") return;
        window.clearInterval(timerId2);
        prevSlide2();
        timerId2 = window.setInterval(nextSlide2, offsetTime);
    });

    // 슬라이드 방향버튼 opacity 이벤트
    right2.addEventListener("mouseenter", opacityChange);
    right2.addEventListener("mouseleave", opacityRemove);
    left2.addEventListener("mouseenter", opacityChange);
    left2.addEventListener("mouseleave", opacityRemove);
    
    // 슬라이드 마우스 후버 이벤트
    page4Slide.addEventListener("mouseenter",function () {
        window.clearInterval(timerId2);
    });
    page4Slide.addEventListener("mouseleave",function () {
        timerId2 = window.setInterval(nextSlide2, offsetTime);
    });
    
    let timerId2 = window.setInterval(nextSlide2, offsetTime);
    
    // 4페이지 슬라이드 함수
    function nextSlide2() {
        page4Slide.style.left = "-100%";
        page4Slide.style.transition = duration + "ms";
        
        window.setTimeout(function () {
            page4Slide.appendChild(page4Slide.firstElementChild);
            page4Slide.removeAttribute("style");
        }, duration)
    }
    function prevSlide2() {
        page4Slide.removeAttribute("style");
        page4Slide.insertBefore(page4Slide.lastElementChild,page4Slide.firstElementChild);
        page4Slide.style.left = "-100%";
        
        window.setTimeout(function () {
            page4Slide.style.transition = duration + "ms";
            page4Slide.style.left = "0";
        }, duration);
    }

    //-------------------------------------------------------------------------------------------------------------
    // 5페이지
    const page5Slide = document.querySelector(".page5Slide");
    const btNumber = document.querySelector(".bt_click > h4 > span");
    const leftSmall = document.querySelector(".leftSmall");
    const rightSmall = document.querySelector(".rightSmall");
    let offsetTime2 = 10000;
    let k = 1;
    let indexNum = 1;
    

    // 마우스 이동시 슬라이드 멈춤
    page5Slide.addEventListener("mouseenter",function () {
        console.log("mouseenter")
        window.clearInterval(timerId3);
    });
    page5Slide.addEventListener("mouseleave",function () {
        console.log("mouseleave")
        timerId3 = window.setInterval(doSlide, offsetTime);
    });

    let timerId3 = window.setInterval(doSlide, offsetTime);
    
    
    // 슬라이드 함수
    function doSlide() {
        indexNum++;
        if(indexNum % 2 == 0){
            leftSlie();
        }else{
            rightSlie();
        }
    }

    // 왼쪽 슬라이드
    function leftSlie(){
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "-100%";
            btNumberChange();
            
            window.setTimeout(function () {
                page5Slide.firstElementChild.removeAttribute("style");
                page5Slide.appendChild(page5Slide.firstElementChild);
            }, duration)
    }
    
    // 오른쪽 슬라이드
    function rightSlie(){
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "100%";
            btNumberChange();
            
            window.setTimeout(function () {
                page5Slide.firstElementChild.removeAttribute("style");
                page5Slide.appendChild(page5Slide.firstElementChild);
            }, duration)

    }

    // 역방향 슬라이드
    function doSlideL() {

    }
    let page5SlideZindex = document.querySelectorAll(".page5Slide > div");

    // 역방향 왼쪽 슬라이드
    function reverseLeftSlide() {
        for(let q = 0; q < page5SlideZindex.left; q++){
            page5SlideZindex.style.zIndex = 0;
        }
        page5Slide.removeAttribute("style");
        page5Slide.appendChild(page5Slide.firstElementChild);
        page5Slide.lastElementChild.style.left = "-100%"
        
        window.setTimeout(function () {
            page5Slide.lastElementChild.style.transition = duration + "ms";
            page5Slide.lastElementChild.style.left = 0;
        }, duration);
    }
    // 역방향 오른쪽 슬라이드
    function reverseRightSlide() {

    }

    // 하단 숫자 변경 함수
    function btNumberChange() {
        k++;
        btNumber.innerHTML = "0" + k;
        if(k == 3) k = 0;
    }

    // 오른쪽버튼 슬라이드 함수
    function btRightSlide() {
        if(page5Slide.firstElementChild.style.left == "-100%" || page5Slide.firstElementChild.style.left == "100%") return;
        window.clearInterval(timerId3);
        doSlide();
        timerId3 = window.setInterval(doSlide, offsetTime)
    }
    //-------------------------------------------------------------------------------------------------------------




    // --------------------------------------------------------------------------
    // 스크롤링

/*
    window.addEventListener("wheel", function(event) {
        event.preventDefault();
    },{passive:false});
    
    
    window.onwheel = function (event){
        let delta = event.deltaY;

        if (delta > 0){
            nextPage();
        }
    };
    // 다음 페이지
    function nextPage () {
        // 현재 페이지의 높이
        let pageHeight = window.innerHeight;
        // 현재 스크롤된 높이
        let crtScrollTop = window.scrollY;
        // 문서 전체 높이
        const documentHeight = document.body.scrollHeight;
        // const documentHeight = document.body.clientHeight;
        // 스크롤 이동 거리
        let dist = 0;

        // 다음페이지가 없는경우 이동거리가 없어 바로종료
        if(documentHeight <= crtScrollTop + pageHeight) return;

        // 페이지를 먼저 이동한 다음
        // 한 페이지가 한 화면에 보여지도록 조정

        //    현재 스크롤된 높이 + 현재 페이지 높이
        dist = crtScrollTop + pageHeight;
        
        // 페이지에서 벗어난 부분을 구한다
        // (현재 스크롤된 높이 + 현재 페이지 높이) % 현재 페이지의 높이            
        let overScroll = dist % pageHeight;
        
        // 만약 벗어난 부분이 없으면 값이 0이기 때문에 (페이지높이와 스크롤된 높이가 같기때문에(dist = overScroll))
        // 뺄셈의 결과가 변하지 않는다.
        dist -= overScroll;

        document.body.style.scrollY = dist;
        
        
        
        } // end of nextPage
*/
    
});