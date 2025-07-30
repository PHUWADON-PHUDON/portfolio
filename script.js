const title = document.querySelector(".title");
const myskills = document.querySelector(".myskills");
const myprojects = document.querySelector(".myprojects");
const smoothwrapper = document.getElementById("smooth-wrapper");
const smoothcontent = document.getElementById("smooth-content");
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
const sec4 = document.querySelector(".sec4");
const boxproject = document.querySelector(".boxproject");
const cube = document.querySelector(".containercube");
const containersec4 = document.querySelector(".sec4 .container");
const itemsec4 = document.querySelectorAll(".sec4 .item");
const clickhome = document.querySelector(".home");
const clickskills = document.querySelector(".skills");
const clickprojects = document.querySelector(".projects");
const clickcontact = document.querySelector(".contact");
const lettalk = document.querySelector(".lettalk");
const cardeffect = document.querySelectorAll(".sec4 .item .effect");
let checkrotatemenu = 0;

document.body.style.overflow = "hidden";

// clickmenu
clickmenu.addEventListener("click",() => {
    if (checkrotatemenu == 0) {
        checkrotatemenu = 1;
        boxtotop.style = "z-index: -1;";
        menuul.style = "transition-delay: .4s;";
        main.style = "inset: 0px; width: 100%; height: 100%; position: fixed; overflow: hidden; z-index: -1; transition-delay: 0s;";
        menu.style = "transition: transform 0s";
    }
    else if (checkrotatemenu == 1) {
        checkrotatemenu = 0;
        boxtotop.style = "z-index: 2;";
        menuul.style = "transition-delay: 0s;";
        main.style = "inset: 0px; width: 100%; height: 100%; position: fixed; overflow: hidden; z-index: 1; transition-delay: .5s;";
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
        menulist[i].style = "background-position: -240px 0;";
    });
    menulist[i].addEventListener("mouseleave",() => {
        menulist[i].style = "background-position: -480px 0;";
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
let textarr = ["Frontend","Backend"];
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
    //script scroll heightlight text
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
});

//gsap animation
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrambleTextPlugin,ScrollToPlugin);

    //smooth scroll
    let smoother = ScrollSmoother.create({
        wrapper:smoothwrapper,
        content:smoothcontent,
        smooth:1
    });

    //preload
    gsap.to(".preload .boxtitle > div",{
        duration: 10,
        width:"100%"
    });

    setTimeout(() => {
        gsap.to(".preload",{
            duration: 0.5,
            transform:"translateY(-100dvh)"
        });

        //scrambleText phuwadon
        gsap.to(title,{
            duration: 4,
            scrambleText: "Phuwadon"
        });

        document.body.style.overflow = "auto";
    },10000);

    //cursor animantion
    gsap.set(".cursor", {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    //book mark
    clickhome.addEventListener("click",() => {
        gsap.to(window,{
            duration: 0,
            scrollTo: "#home",
        });
    });
    clickskills.addEventListener("click",() => {
        gsap.to(window,{
            duration: 0,
            scrollTo: "#skills",
        });
    });
    clickprojects.addEventListener("click",() => {
        gsap.to(window,{
            duration: 0,
            scrollTo: "#projects",
        });
    });
    clickcontact.addEventListener("click",() => {
        gsap.to(window,{
            duration: 0,
            scrollTo: "#contact",
        });
    });
    lettalk.addEventListener("click",() => {
        gsap.to(window,{
            duration: 0,
            scrollTo: "#contact",
        });
    });

    //script loadbar
    gsap.ticker.add(() => {
        const scrollY = smoother.scrollTop();
        const contentHeight = smoother.content().scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxScroll = contentHeight - viewportHeight;
        const progress = (scrollY / maxScroll) * 100;
        loadbar.style = `width: ${progress}%;`;
    });

    //rotation cube
    gsap.to(cube,{
        scrollTrigger:{
            trigger:cube,
            start:"top center",
            scrub:true,
        },
        rotation:360
    });

    //scrambleText my skills
    gsap.to(myskills,{
        scrollTrigger:{
            trigger:myskills,
            start:"top bottom",
            onEnter: () => {
                gsap.to(myskills, {
                  scrambleText: {
                    text: "My Skills"
                  },
                  duration: 2
                });
            }
        }
    });

    //scrambleText my projects
    gsap.to(myprojects,{
        scrollTrigger:{
            trigger:myprojects,
            start:"top bottom",
            onEnter: () => {
                gsap.to(myprojects, {
                  scrambleText: {
                    text: "My Projects"
                  },
                  duration: 2
                });
            }
        }
    });

    //scroll projecs
    if (window.innerWidth >= 835) {
        gsap.to(sec4,{
            scrollTrigger:{
                trigger:sec4,
                start:"top top",
                end:() => `+=${(itemsec4.length - 2) * 350}`,
                pin:true,
                onEnter:() => {
                    gsap.to(itemsec4,{
                        scrollTrigger:{
                            trigger:itemsec4,
                            start:"top top",
                            end:() => `+=${(itemsec4.length - 2) * 350}`,
                            scrub:true,
                        },
                        x:-((itemsec4.length - 2) * 350),
                    });
                }
            }
        });
    }

    //card effect
    itemsec4.forEach((el,i) => {
        el.addEventListener("mousemove", e => {
            console.log(i)
            const rect = itemsec4[i].getBoundingClientRect();
            gsap.to(cardeffect[i],{
                duration: 2,
                ease: "power3",
                xPercent: -50,
                yPercent: -50,
                x:e.clientX - rect.left,
                y:e.clientY - rect.top,
            })
        });
    });

    //seemore fade
    if (window.innerWidth >= 835) {
        gsap.to(".seemoretext",{
            scrollTrigger:{
                trigger:".seemoretext",
                start:"+=800 +=10",
                end:"+=500",
                scrub:true,
            },
            width:300,
            filter:"hue-rotate(360deg)"
        });
    }

    //scrambleText contact with me
    gsap.to(".contactwithme",{
        scrollTrigger:{
            trigger:".contactwithme",
            start:"top bottom",
            onEnter: () => {
                gsap.to(".contactwithme", {
                  scrambleText: {
                    text: "Contact"
                  },
                  duration: 2
                });
            }
        }
    });
});