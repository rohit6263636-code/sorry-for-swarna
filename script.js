// =====================================
// ELEMENTS
// =====================================

const pages=document.querySelectorAll(".page");

const bgMusic=document.getElementById("bgMusic");

const typing=document.getElementById("typing");

const unlockBtn=document.getElementById("unlockBtn");

const continueBtn=document.getElementById("continueBtn");

const letterBtn=document.getElementById("letterBtn");

const photoBtn=document.getElementById("photoBtn");

const finalBtn=document.getElementById("finalBtn");

const loveBtn=document.getElementById("loveBtn");

const popup=document.getElementById("popup");

const letterBox=document.getElementById("letterText");

const galleryImage=document.getElementById("galleryImage");

const photoCount=document.getElementById("photoCount");

// =====================================
// PAGE FUNCTION
// =====================================

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// =====================================
// TITLE ANIMATION
// =====================================

const titles=[

"❤️ Sorry Bacchu",

"🥺 Please Forgive Me",

"🌸 Swarna ❤️",

"💖 I Love You",

"❤️ Forever"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},2000);

// =====================================
// TYPING PAGE 1
// =====================================

const intro=

`Ek Chhoti Si Request... ❤️

Bas 2 Minute...

Apko udas nhi dekh sakta
to please udas 

mat rakhuyr pls smile.`;

let i=0;

function typeIntro(){

typing.innerHTML="";

i=0;

typingEffect();

}

function typingEffect(){

if(i<intro.length){

typing.innerHTML+=intro.charAt(i);

i++;

setTimeout(typingEffect,40);

}

}

// =====================================
// LETTER
// =====================================

const letter=

`Mera Bacchu... ❤️

Mujhe pata hai
maine aapko hurt kiya.

Us baat ka
mujhe bahut afsos hai.

Main excuses
nahi dunga.

Bas itna kahunga...

Main aapse
bahut jyada
pyaar karta hoon.

Aap meri duniya hain.

Aap meri smile hain.

Please...

Ek baar muskura dijiye.

❤️

Love You Forever

-Rohit ❤️`;

let j=0;

function startLetter(){

letterBox.innerHTML="";

j=0;

typeLetter();

}

function typeLetter(){

if(j<letter.length){

letterBox.innerHTML+=letter.charAt(j);

j++;

setTimeout(typeLetter,40);

}else{

photoBtn.style.display="inline-block";

}

}
// =====================================
// BUTTON EVENTS
// =====================================

unlockBtn.onclick=()=>{

showPage("page1");

typeIntro();

bgMusic.play().catch(()=>{});

};

continueBtn.onclick=()=>{

showPage("page2");

};

letterBtn.onclick=()=>{

showPage("page3");

startLetter();

};

// =====================================
// PHOTO GALLERY
// =====================================

const photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg"
];

let current=0;

document.getElementById("nextBtn").onclick=()=>{

if(current<photos.length-1){

current++;

galleryImage.src=photos[current];

photoCount.innerHTML=(current+1)+" / 3";

}

if(current==2){

finalBtn.style.display="inline-block";

}

};

document.getElementById("prevBtn").onclick=()=>{

if(current>0){

current--;

galleryImage.src=photos[current];

photoCount.innerHTML=(current+1)+" / 3";

}

};

photoBtn.onclick=()=>{

showPage("page4");

};

finalBtn.onclick=()=>{

showPage("page5");

};

// =====================================
// CONFETTI
// =====================================

loveBtn.onclick=()=>{

confetti({

particleCount:250,

spread:150,

origin:{y:0.6}

});

setTimeout(()=>{

confetti({

particleCount:180,

angle:60,

spread:70,

origin:{x:0}

});

confetti({

particleCount:180,

angle:120,

spread:70,

origin:{x:1}

});

},500);

popup.style.display="flex";

};

// =====================================
// POPUP CLOSE
// =====================================

popup.onclick=()=>{

popup.style.display="none";

};

// =====================================
// START
// =====================================

showPage("lockScreen");
// =========================
// BUTTON CLICK EFFECT
// =========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(.90)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:300

});

});

});
// REAL FLOATING HEARTS

const heartContainer=document.getElementById("heartContainer");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},500);
// ============================
// FLOWER PETALS
// ============================

const petalContainer=document.getElementById("petalContainer");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petalContainer.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

},700);
// ==========================
// TWINKLING STARS
// ==========================

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(star);

}