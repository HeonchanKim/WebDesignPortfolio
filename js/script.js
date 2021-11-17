window.addEventListener("load", function () {
    // ------------------------------------------------------------------------------------------------------
    // 2페이지
    const skill = document.querySelectorAll(".skill_item > li > span > span");

    window.addEventListener("scroll", function(event) {
        event.preventDefault();
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
    const left1 = document.querySelector(".left1");
    const right1 = document.querySelector(".right1");
    const offsetTime = 5000;
    const duration = 500;
    
    // 슬라이드 좌우 방향 클릭 이벤트
    right1.addEventListener("click", function () {
        if(page3Slide.style.left == "-100%") return;
        window.clearInterval(timerId);
        nextSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });
    left1.addEventListener("click", function () {
        if(page3Slide.style.transitionDuration == duration + "ms") return;
        window.clearInterval(timerId);
        prevSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });
    
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
        }, 10);
        window.setTimeout(function() {
            page3Slide.removeAttribute("style");
        }, duration);
    }
    

    //-------------------------------------------------------------------------------------------------------------
    // 4페이지
    const page4Slide = document.querySelector(".page4Slide");
    const left2 = document.querySelector(".left2");
    const right2 = document.querySelector(".right2");
    
    // 슬라이드 좌우방향 마우스 클릭 이벤트
    right2.addEventListener("click", function () {
        if(page4Slide.style.left == "-100%") return;
        window.clearInterval(timerId2);
        nextSlide2();
        timerId2 = window.setInterval(nextSlide2, offsetTime);
    });
    left2.addEventListener("click", function () {
        if(page4Slide.style.transitionDuration == duration + "ms") return;
        window.clearInterval(timerId2);
        prevSlide2();
        timerId2 = window.setInterval(nextSlide2, offsetTime);
    });

    
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
        }, 10);
        window.setTimeout(function() {
            page4Slide.removeAttribute("style");
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
    
        // 하단 슬라이드버튼 클릭시 슬라이드효과 이벤트
        rightSmall.addEventListener("click", function () {
            if(page5Slide.firstElementChild.style.left == "-100%" || page5Slide.firstElementChild.style.left == "100%") return;
            window.clearInterval(timerId3);
            doSlide();
            timerId3 = window.setInterval(doSlide, offsetTime);
        });
        leftSmall.addEventListener("click", function () {
            if(page5Slide.firstElementChild.style.transitionDuration == duration + "ms") return;
            window.clearInterval(timerId3);
            reverseDoSlide();
            timerId3 = window.setInterval(doSlide, offsetTime);
        });
        
    // 마우스 이동시 슬라이드 멈춤 이벤트
    page5Slide.addEventListener("mouseenter",function () {
        window.clearInterval(timerId3);
    });
    page5Slide.addEventListener("mouseleave",function () {
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

    // 왼쪽 슬라이드 함수
    function leftSlie(){
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "-100%";
            btNumberChange();
            
            window.setTimeout(function () {
                page5Slide.firstElementChild.removeAttribute("style");
                page5Slide.appendChild(page5Slide.firstElementChild);
            }, duration)
    }
    
    // 오른쪽 슬라이드 함수
    function rightSlie(){
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "100%";
            btNumberChange();
            
            window.setTimeout(function () {
                page5Slide.firstElementChild.removeAttribute("style");
                page5Slide.appendChild(page5Slide.firstElementChild);
            }, duration)

    }

    // 역방향 슬라이드 함수
    function reverseDoSlide() {
        indexNum++;
        if(indexNum % 2 == 0){
            reverseRightSlide();
        }else{
            reverseLeftSlide();
        }
    }

    // 역방향 왼쪽 슬라이드 함수
    function reverseLeftSlide() {
        page5Slide.removeAttribute("style");
        page5Slide.lastElementChild.style.left = "-100%";
        page5Slide.insertBefore(page5Slide.lastElementChild,page5Slide.firstElementChild);
        reverseBtNumberChange();
        window.setTimeout(function () {
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "0";
        }, 10);
        window.setTimeout(function () {
            page5Slide.firstElementChild.removeAttribute("style");
        }, duration);
    }
    
    // 역방향 오른쪽 슬라이드 함수
    function reverseRightSlide() {
        page5Slide.removeAttribute("style");
        page5Slide.lastElementChild.style.left = "100%";
        page5Slide.insertBefore(page5Slide.lastElementChild,page5Slide.firstElementChild);
        reverseBtNumberChange();
        window.setTimeout(function () {
            page5Slide.firstElementChild.style.transition = duration + "ms";
            page5Slide.firstElementChild.style.left = "0";
        }, 10);
        window.setTimeout(function () {
            page5Slide.firstElementChild.removeAttribute("style");
        }, duration);
    }

    // 하단 숫자 변경 함수
    function btNumberChange() {
        if(k >= 3) k = 0;
        k++;
        btNumber.innerHTML = "0" + k;
    }

    // 역방향 하단 숫자 변경 함수
    function reverseBtNumberChange() {
        k--;
        if(k == 0) k = 3;
        btNumber.innerHTML = "0" + k;
    }

    //-------------------------------------------------------------------------------------------------------------
    // 스크롤링
/*
    let html = document.querySelector("html");

    window.addEventListener("wheel", function(event) {
        event.preventDefault();
        // if(window.scrollY > 0) return;
        let delta = event.deltaY;
        
        if (delta > 0){
            nextPage();
        }else{
            prevPage();
        }
    },{passive:false});
    


    // 다음 페이지
    function nextPage () {
        // 현재 페이지의 높이
        let pageHeight = window.innerHeight;
        // 현재 스크롤된 높이
        let crtScrollTop = window.scrollY;
        // 문서 전체 높이
        let documentHeight = document.body.scrollHeight;
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

        window.scrollTo({top:dist, behavior:'smooth'});
        // window.scrollTo(0, dist);

        
        let steps = 0;
        function scrollNext() {
            steps += 20;
            window.scrollTo(0, steps);
            // console.log(dist)
            if(steps >= dist)
                clearInterval(TIMERID);
        }
        let TIMERID = window.setInterval(scrollNext, 10);
        
        } // end of nextPage



    // 이전 페이지
    function prevPage() {
        // 이전 페이지로 이동한 다음
        // 페이지 조정을 수행한다.

        // 현재 페이지의 높이
        let pageHeight = window.innerHeight;
        // 현재 스크롤된 높이
        let crtScrollTop = window.scrollY;
        // 문서 전체 높이
        let documentHeight = document.body.scrollHeight;
        // const documentHeight = document.body.clientHeight;
        // 스크롤 이동 거리
        let dist = 0;

        // 이전 페이지가 없는 경우에는 종료
        if(crtScrollTop == 0) return;

        dist = crtScrollTop - pageHeight;

        // 한 페이지가 화면에 다 보이도록 조정
        let overScroll = dist % pageHeight;
        if(overScroll != 0) overScroll = pageHeight - overScroll;

        dist += overScroll;

        // html.scrollTo({top:dist, behavior:'smooth'})
        // console.log(dist);
        let timerID = window.setInterval(function () {
            window.scrollTo({top:dist, behavior:'smooth'});
            console.log(dist);
            clearInterval(timerID);
        }, 100)
        // if(timerID) return false;
    }
*/




    let html = document.querySelector("html");
    let timerID;
    window.addEventListener("wheel", function(event) {
        event.preventDefault();
        // if(window.scrollY > 0) return;
        let delta = event.deltaY;
        
        if (delta > 0){
            nextPage();
        }else{
            prevPage();
        }
    },{passive:false});
    
    // 다음 페이지
    function nextPage () {
        // 현재 페이지의 높이
        let pageHeight = window.innerHeight;
        // 현재 스크롤된 높이
        let crtScrollTop = window.scrollY;
        // 문서 전체 높이
        let documentHeight = document.body.scrollHeight;
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

        let timerID = window.setInterval(function () {
            html.scrollTo({top:dist, behavior:'smooth'});
            // window.scrollTo(0, dist);
            console.log(dist);
            clearInterval(timerID);
        }, 100)
        
        } // end of nextPage

    // 이전 페이지
    function prevPage() {
        // 이전 페이지로 이동한 다음
        // 페이지 조정을 수행한다.

        // 현재 페이지의 높이
        let pageHeight = window.innerHeight;
        // 현재 스크롤된 높이
        let crtScrollTop = window.scrollY;
        // 문서 전체 높이
        let documentHeight = document.body.scrollHeight;
        // const documentHeight = document.body.clientHeight;
        // 스크롤 이동 거리
        let dist = 0;

        // 이전 페이지가 없는 경우에는 종료
        if(crtScrollTop == 0) return;

        dist = crtScrollTop - pageHeight;

        // 한 페이지가 화면에 다 보이도록 조정
        let overScroll = dist % pageHeight;
        if(overScroll != 0) overScroll = pageHeight - overScroll;

        dist += overScroll;

        // html.scrollTo({top:dist, behavior:'smooth'})
        // console.log(dist);
        let timerID = window.setInterval(function () {
            window.scrollTo({top:dist, behavior:'smooth'});
            console.log(dist);
            clearInterval(timerID);
        }, 100)
        // if(timerID) return false;
    }
    
});