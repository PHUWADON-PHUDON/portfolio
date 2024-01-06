const main = document.querySelector("main");
const boxtotop = document.querySelector(".boxmenu .box-left");
const boxmenu = document.querySelector(".boxmenu");
const clickmenu = document.querySelector(".box-right");
const lineclose = document.querySelectorAll(".box-right > div > span");
const menu = document.querySelector(".menu");
const clickup = document.querySelector(".clickup");
const menubg = document.querySelector(".menubg");
const menuul = document.querySelector(".menu > ul");
const menulist = document.querySelectorAll(".menu > ul > li > a");
const writetext = document.querySelector(".writetext");
const prompt = document.querySelector(".sec1 .boxleft .boxtext > h2 > span:nth-of-type(2)");
const textcolorsec2 = document.querySelectorAll(".sec2 .boxtext > h1 > span");
const loadbar = document.querySelector(".loadbar > span");

let checkrotatemenu = 0;

// clickmenu
clickmenu.addEventListener("click",() => {
    if (checkrotatemenu == 0) {
        checkrotatemenu = 1;
        boxtotop.style = "z-index: -1;";
        menuul.style = "transition-delay: .4s;";
        main.style = "z-index: -1; transition-delay: 0s;";
        menu.style = "transition: transform 0s";
    }
    else if (checkrotatemenu == 1) {
        checkrotatemenu = 0;
        boxtotop.style = "z-index: 2;";
        menuul.style = "transition-delay: 0s;";
        main.style = "z-index: 1; transition-delay: .5s;";
        menu.style = "transition: transform 1s";
        clickmenu.classList.remove("addmouseenterrotate");
    }
    clickmenu.classList.toggle("addcloserotate")
    menubg.classList.toggle("addmenubg");
    menuul.classList.toggle("addtextmenu");
    menu.classList.toggle("addscalemenu");
    lineclose[0].classList.toggle("addclose1");
    lineclose[1].classList.toggle("addclose2");
    lineclose[2].classList.toggle("addclose3");
});

clickmenu.addEventListener("mouseenter",() => {
    if (checkrotatemenu == 1) {
        clickmenu.classList.add("addmouseenterrotate");
    }
});

clickmenu.addEventListener("mouseleave",() => {
    if (checkrotatemenu == 1) {
        clickmenu.classList.remove("addmouseenterrotate");
    }
});

for (let i = 0 ; i < menulist.length ; i++) {
    menulist[i].addEventListener("mouseenter",() => {
        menulist[i].style = "background-position: -200px 0;";
    });
    menulist[i].addEventListener("mouseleave",() => {
        menulist[i].style = "background-position: -400px 0;";
        setTimeout(() => {
            menulist[i].style = "transition: none; background-position: 0px 0;";
        },230);
    });
}

//click to top
clickup.addEventListener("click",() => {
    window.scrollTo(null,0);
});

//script write text
let textarr = ["Plug phuwadon","suwannarat"];
let counttextarr = 0;
let couttext = 0;
let checktext = 0;
let delayst;

delayst = setInterval(fnwritetext,100);

function fnwritetext() {
    if (checktext == 0) {
        let showtext = textarr[counttextarr].slice(0,couttext);
        writetext.innerHTML = showtext;
        couttext++;
        if (couttext > textarr[counttextarr].length) {
            checktext = 1;
            couttext = textarr[counttextarr].length;
            clearInterval(delayst);
            prompt.classList.add("addfadeprompt");
            setTimeout(() => {
                delayst = setInterval(fnwritetext,100);
                prompt.classList.remove("addfadeprompt");
            },5000);
        }
    }
    else if (checktext == 1) {
        let showtext = textarr[counttextarr].slice(0,couttext);
        writetext.innerHTML = showtext;
        couttext--;
        if (couttext < 0) {
            checktext = 0;
            couttext = 0;
            counttextarr++;
            if (counttextarr > textarr.length - 1) {
                counttextarr = 0;
            }
        }
    }
}

window.addEventListener("scroll",() => {
    //script scroll heightlight
    if (window.scrollY >= (window.innerHeight - 300) && window.scrollY <= window.innerHeight) {
        textcolorsec2[0].style = "color: #fff;";
    }
    else{
        textcolorsec2[0].style = "color: unset;";
    }

    if (window.scrollY >= (window.innerHeight + 1) && window.scrollY <= window.innerHeight + 300) {
        textcolorsec2[1].style = "color: #fff;";
    }
    else{
        textcolorsec2[1].style = "color: unset;";
    }

    //script loadbar
    loadbar.style = `width: ${(window.scrollY / (document.body.scrollHeight - 1000)) * 100}%;`;

    //script sec3
    if (window.scrollY >= (window.innerHeight * 2 - 700)) {
        console.log("fuck")
    }
});
