//==============================
// TYPING EFFECT
//==============================

const text = [
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");


function typeEffect(){

    let currentText = text[index];


    if(!deleting){

        typingElement.textContent =
        currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }

    else{

        typingElement.textContent =
        currentText.substring(0,charIndex--);


        if(charIndex < 0){

            deleting = false;

            index++;

            if(index >= text.length){

                index = 0;

            }

        }

    }


    setTimeout(typeEffect,deleting ? 60 : 120);

}


typeEffect();



//==============================
// PARTICLE BACKGROUND
//==============================


const particles =
document.getElementById("particles");


for(let i=0;i<80;i++){


    let particle =
    document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random()*100+"%";


    particle.style.top =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (Math.random()*10+5)+"s";


    particle.style.animationDelay =
    Math.random()*5+"s";


    particles.appendChild(particle);


}



//==============================
// MOUSE GLOW EFFECT
//==============================


const glow =
document.createElement("div");


glow.className="mouse-glow";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


    glow.style.left =
    e.clientX+"px";


    glow.style.top =
    e.clientY+"px";


});



//==============================
// SCROLL REVEAL
//==============================


const revealElements =
document.querySelectorAll(
".glass,.project,.card"
);



function reveal(){


    revealElements.forEach(
    element=>{


        let position =
        element.getBoundingClientRect()
        .top;


        let screen =
        window.innerHeight - 100;


        if(position < screen){

            element.classList.add("show");

        }


    });


}


window.addEventListener(
"scroll",
reveal
);


reveal();



//==============================
// NAVBAR ACTIVE LINK
//==============================


const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll("nav a");


window.addEventListener(
"scroll",
()=>{


    let current="";


    sections.forEach(section=>{


        const top =
        window.scrollY;


        const offset =
        section.offsetTop-200;


        const height =
        section.offsetHeight;


        if(
        top >= offset &&
        top < offset+height
        ){

            current =
            section.getAttribute("id");

        }


    });



    links.forEach(link=>{


        link.classList.remove("active");


        if(
        link.getAttribute("href")
        ==
        "#"+current
        ){

            link.classList.add("active");

        }


    });


});
//==============================
// 3D PROJECT CARD TILT EFFECT
//==============================


const cards =
document.querySelectorAll(".project");


cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    (e)=>{


        const rect =
        card.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;


        const centerX =
        rect.width / 2;


        const centerY =
        rect.height / 2;


        const rotateX =
        (y-centerY)/15;


        const rotateY =
        (centerX-x)/15;


        card.style.transform =
        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
        `;


    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";


    });


});



//==============================
// BUTTON RIPPLE EFFECT
//==============================


const buttons =
document.querySelectorAll(".btn,.btn2");


buttons.forEach(button=>{


    button.addEventListener(
    "click",
    function(e){


        let ripple =
        document.createElement("span");


        ripple.className="ripple";


        this.appendChild(ripple);



        let x =
        e.clientX -
        this.getBoundingClientRect().left;


        let y =
        e.clientY -
        this.getBoundingClientRect().top;



        ripple.style.left =
        x+"px";


        ripple.style.top =
        y+"px";



        setTimeout(
        ()=>{
            ripple.remove();
        },
        600
        );


    });


});



//==============================
// GAME STYLE LOADING SCREEN
//==============================


window.addEventListener(
"load",
()=>{


    const loader =
    document.createElement("div");


    loader.className =
    "game-loader";


    loader.innerHTML =
    `
    <div class="loading-box">
        <h1>INITIALIZING...</h1>
        <div class="loading-bar">
            <span></span>
        </div>
        <p>WELCOME PLAYER</p>
    </div>
    `;


    document.body.appendChild(loader);



    setTimeout(
    ()=>{


        loader.style.opacity="0";


        setTimeout(
        ()=>{
            loader.remove();
        },
        1000
        );


    },
    2500
    );


});



//==============================
// FLOATING PARTICLE MOVEMENT
//==============================


const particleItems =
document.querySelectorAll(".particle");


particleItems.forEach(
particle=>{


    particle.addEventListener(
    "mouseenter",
    ()=>{


        particle.style.background =
        "#ffffff";


        particle.style.boxShadow =
        "0 0 20px cyan";


    });


});



//==============================
// KEYBOARD GAMING EFFECT
//==============================


document.addEventListener(
"keydown",
(e)=>{


    if(e.key==="Enter"){


        document.body.style.filter =
        "brightness(1.3)";


        setTimeout(
        ()=>{

            document.body.style.filter =
            "brightness(1)";

        },
        200
        );

    }


});
