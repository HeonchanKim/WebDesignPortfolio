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

    //-----------------------------------------------------------------------------------------------------
    // 본문
    const bestList = document.querySelectorAll(".bestList > li");
    const bestListA = document.querySelectorAll(".bestList > li > a");
    const listSubTop = document.querySelectorAll(".listSubTop");
    const listSub = document.querySelectorAll(".listSub");
    const BestCheckHeart = document.querySelectorAll(".BestCheckHeart");
    const TopRankBestCheckHeart = document.querySelectorAll(".TopRankBestCheckHeart");

    // 상품목록별 베스트 상품 보기 이벤트
    for(let a = 0; a < bestList.length; a++){
        bestList[a].addEventListener("click", function () {
            for(let aa = 0; aa < listSub.length; aa++){
                listSub[aa].classList.remove("on");
                listSubTop[aa].classList.remove("on");
                bestListA[aa].classList.remove("checkedText");
            }
            listSub[a].classList.toggle("on");
            listSubTop[a].classList.toggle("on");
            bestListA[a].classList.toggle("checkedText");
        });
    }

    // 찜하기 기능 이벤트
    for(let g = 0; g < TopRankBestCheckHeart.length; g++){
        TopRankBestCheckHeart[g].addEventListener("click", function () {
            TopRankBestCheckHeart[g].classList.toggle("checkedTopRankBestCheckHeart");
        });
    }

    for(let s = 0; s < BestCheckHeart.length; s++){
        BestCheckHeart[s].addEventListener("click", function () {
            BestCheckHeart[s].classList.toggle("checkHeartBest");
        });
    }
});