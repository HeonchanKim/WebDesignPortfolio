window.addEventListener("load", function () {
    // ------------------------------------------------------------------------------------------------------
    // 2페이지
    const skill = document.querySelectorAll(".skill_item > li > span > span");

    window.addEventListener("wheel", function() {
        if(window.scrollY >= 800 && window.scrollY < 1700){
            for(let i = 0; i < skill.length; i++){
                skill[i].style.transition = "2000ms";
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
    const duration = 1000;
    const left1 = document.querySelector(".left1");
    const right1 = document.querySelector(".right1");

    right1.addEventListener("click", function () {
        if(page3Slide.style.left == "-100%") return;
        window.clearInterval(timerId);
        nextSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });
    left1.addEventListener("click", function () {
        if(page3Slide.style.left == "100%") return;
        window.clearInterval(timerId);
        prevSlide();
        timerId = window.setInterval(nextSlide, offsetTime);
    });

    
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
        page3Slide.style.left = "100%";
        page3Slide.style.transition = duration + "ms";
        window.setTimeout(function () {
            page3Slide.insertBefore(page3Slide.lastElementChild,page3Slide.firstElementChild);
            page3Slide.removeAttribute("style");
            // page3Slide.style.left = 0;
        }, duration);
    }
    //-------------------------------------------------------------------------------------------------------------
    // 4페이지
    //-------------------------------------------------------------------------------------------------------------
    // 5페이지
    const page5Slide = document.querySelector(".page5Slide");
    const btNumber = document.querySelector(".bt_click > h4 > span");
    let k = 1;
    
    page5Slide.addEventListener("mouseenter",function () {
        window.clearInterval(timerId2);
    });
    page5Slide.addEventListener("mouseleave",function () {
        timerId2 = window.setInterval(doSlide, offsetTime);
    });

    let timerId2 = window.setInterval(doSlide, offsetTime);
    
    
    function doSlide() {
        page5Slide.firstElementChild.style.transition = duration + "ms";
        page5Slide.firstElementChild.style.left = "-100%";
        btNumberChange();
        
        window.setTimeout(function () {
            page5Slide.firstElementChild.removeAttribute("style");
            page5Slide.appendChild(page5Slide.firstElementChild);
        }, duration)
    }
    
    function btNumberChange() {
        k++;
        btNumber.innerHTML = "0" + k;
        if(k == 3) k = 0;
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