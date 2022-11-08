/* Wszystko co dotyczy menu */
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const darkerBackground = document.querySelector("#darker");
const title = document.querySelector("#title");
const menu = document.querySelector("#menu");
const kultura = document.querySelector("#kultura");
const kulturaLink = document.querySelector("#kultura-link");
const przyroda = document.querySelector("#przyroda");
const przyrodaLink = document.querySelector("#przyroda-link");
const sport = document.querySelector("#sport");
const sportLink = document.querySelector("#sport-link");
hamburgerMenu.addEventListener("click", function(){
    if((!kultura.classList.contains("active"))&&(!przyroda.classList.contains("active"))&&(!sport.classList.contains("active"))){
        hamburgerMenu.querySelector("svg").classList.toggle("active");
        darkerBackground.classList.toggle("active");
        title.classList.toggle("active");
        menu.classList.toggle("active");
    }else if(sport.classList.contains("active")){
        hamburgerMenu.querySelector("svg").classList.toggle("active");
        sport.classList.add("fade");
        setTimeout(()=>{
            sportRight.classList.remove("move-block");
            sportLeft.classList.remove("move-block");
            sport.classList.toggle("active");
            setTimeout(()=>{sport.classList.remove("fade")}, 1000);
        }, 500);
    }else if(przyroda.classList.contains("active")){
        hamburgerMenu.querySelector("svg").classList.toggle("active");
        przyroda.classList.toggle("active");
        setTimeout(()=>{menu.classList.toggle("active")}, 500);
    }else{
        hamburgerMenu.querySelector("svg").classList.toggle("active");
        kultura.classList.add("fade");
        setTimeout(()=>{
            kultura.classList.toggle("active");
            menu.classList.toggle("active");
            kultura.classList.remove("fade");
        }, 500);
    }
});
kulturaLink.addEventListener("click", function(){
    hamburgerMenu.querySelector("svg").classList.toggle("active");
    menu.classList.toggle("active");
    kultura.classList.toggle("active");
});
przyrodaLink.addEventListener("click", function(){
    hamburgerMenu.querySelector("svg").classList.toggle("active");
    menu.classList.remove("active");
    setTimeout(()=>{przyroda.classList.toggle("active");}, 400)
});
sportLink.addEventListener("click", function(){
    hamburgerMenu.querySelector("svg").classList.toggle("active");
    sport.classList.toggle("active");
});

/* wszystko co dotyczy sport */
const sportLeft = document.querySelector("#sport .left");
const sportRight = document.querySelector("#sport .right");
const sportLato = document.querySelector("#sport .left .top h2");
const sportLatoReturn = document.querySelector("#sport .right .bottom .return");
const sportZima = document.querySelector("#sport .right .top h2");
const sportZimaReturn = document.querySelector("#sport .left .bottom .return");
const sportZimaTrekking = document.querySelectorAll("#sport .left .bottom .items span")[0];
const sportZimaWspinaczkaLodowa = document.querySelectorAll("#sport .left .bottom .items span")[1];
const sportZimaSkitouring = document.querySelectorAll("#sport .left .bottom .items span")[2];
const sportLatoTrekking = document.querySelectorAll("#sport .right .bottom .items span")[0];
const sportLatoTrailRunning = document.querySelectorAll("#sport .right .bottom .items span")[1];
const sportLatoWspinaczka = document.querySelectorAll("#sport .right .bottom .items span")[2];
const sportZimaItems = document.querySelector("#sport .left .bottom .items");
const sportLatoItems = document.querySelector("#sport .right .bottom .items");
const sportZimaTxt = document.querySelector("#sport .left .bottom .text");
const sportLatoTxt = document.querySelector("#sport .right .bottom .text");
const sportZimaImg = document.querySelector("#sport .left .bottom .img");
const sportLatoImg = document.querySelector("#sport .right .bottom .img");
sportLato.addEventListener("click", function(){
    sportRight.classList.toggle("move-block");
    sportLeft.classList.toggle("move-line");
});
sportLatoReturn.addEventListener("click", function(){
    sportRight.classList.toggle("move-block");
    sportLeft.classList.toggle("move-line");
});
sportZima.addEventListener("click", function(){
    sportLeft.classList.toggle("move-block");
    sportRight.classList.toggle("move-line");
});
sportZimaReturn.addEventListener("click", function(){
    sportLeft.classList.toggle("move-block");
    sportRight.classList.toggle("move-line");
});
sportZimaTrekking.addEventListener("click", function(){
    sportZimaImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportZimaTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active")
    });
    sportZimaItems.className = "items";
    sportZimaItems.classList.add("trekking");
    sportZimaImg.querySelector("img.trekking").classList.add("active");
    sportZimaTxt.querySelector("span.trekking").classList.add("active");
});
sportZimaWspinaczkaLodowa.addEventListener("click", function(){
    sportZimaImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportZimaTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active");
    });
    sportZimaItems.className = "items";
    sportZimaItems.classList.add("wspinaczkaLodowa");
    sportZimaImg.querySelector("img.wspinaczkaLodowa").classList.add("active");
    sportZimaTxt.querySelector("span.wspinaczkaLodowa").classList.add("active");
});
sportZimaSkitouring.addEventListener("click", function(){
    sportZimaImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportZimaTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active");
    });
    sportZimaItems.className = "items";
    sportZimaItems.classList.add("skitouring");
    sportZimaImg.querySelector("img.skitouring").classList.add("active");
    sportZimaTxt.querySelector("span.skitouring").classList.add("active");
});
sportLatoTrekking.addEventListener("click", function(){
    sportLatoImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoItems.className = "items";
    sportLatoItems.classList.add("trekking");
    sportLatoImg.querySelector("img.trekking").classList.add("active");
    sportLatoTxt.querySelector("span.trekking").classList.add("active");
});
sportLatoTrailRunning.addEventListener("click", function(){
    sportLatoImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoItems.className = "items";
    sportLatoItems.classList.add("trailRunning");
    sportLatoImg.querySelector("img.trailRunning").classList.add("active");
    sportLatoTxt.querySelector("span.trailRunning").classList.add("active");
});
sportLatoWspinaczka.addEventListener("click", function(){
    sportLatoImg.querySelectorAll("img").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoTxt.querySelectorAll("span").forEach(function(el){
        el.classList.remove("active");
    });
    sportLatoItems.className = "items";
    sportLatoItems.classList.add("wspinaczka");
    sportLatoImg.querySelector("img.wspinaczka").classList.add("active");
    sportLatoTxt.querySelector("span.wspinaczka").classList.add("active");
});

/* wszystko co dotyczy przyroda */
const przyrodaFauna = document.querySelector("#przyroda .faunaFlora .fauna");
const przyrodaFaunaText = document.querySelector("#przyroda .text .fauna");
const przyrodaFlora = document.querySelector("#przyroda .faunaFlora .flora");
const przyrodaFloraText = document.querySelector("#przyroda .text .flora");
const przyrodaImg = document.querySelector("#przyroda .img");
przyrodaFauna.addEventListener("click", function(){
    przyrodaFauna.classList.toggle("active");
    przyrodaFlora.classList.toggle("active");
    przyrodaFaunaText.classList.toggle("active");
    przyrodaFloraText.classList.toggle("active");
    przyrodaImg.className = "img";
    przyrodaImg.classList.add("fauna");
});
przyrodaFlora.addEventListener("click", function(){
    przyrodaFauna.classList.toggle("active");
    przyrodaFlora.classList.toggle("active");
    przyrodaFaunaText.classList.toggle("active");
    przyrodaFloraText.classList.toggle("active");
    przyrodaImg.className = "img";
    przyrodaImg.classList.add("flora");
});

/* wszystko co dotyczy kultura */
const podhaleAnchor = document.querySelector("#kultura .podhale-anchor");
const ludzieAnchor = document.querySelector("#kultura .ludzie-anchor");
const pasterstwoAnchor = document.querySelector("#kultura .pasterstwo-anchor");
const architekturaAnchor = document.querySelector("#kultura .architektura-anchor");
const lst = document.querySelectorAll("#kultura li");
podhaleAnchor.addEventListener("click", function(){
    lst.forEach(function(el){
        el.classList.remove("active");
    });
    podhaleAnchor.parentElement.classList.add("active")
});
ludzieAnchor.addEventListener("click", function(){
    lst.forEach(function(el){
        el.classList.remove("active");
    });
    ludzieAnchor.parentElement.classList.add("active")
});
pasterstwoAnchor.addEventListener("click", function(){
    lst.forEach(function(el){
        el.classList.remove("active");
    });
    pasterstwoAnchor.parentElement.classList.add("active")
});
architekturaAnchor.addEventListener("click", function(){
    lst.forEach(function(el){
        el.classList.remove("active");
    });
    architekturaAnchor.parentElement.classList.add("active")
});