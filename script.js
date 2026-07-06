// =============================
// Smooth Scroll for Navigation
// =============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if(targetSection){

            targetSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =============================
// Get Started Button
// =============================

const startButton = document.getElementById("startBtn");

if(startButton){

    startButton.addEventListener("click", function(){

        document.querySelector("#about").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// =============================
// Header Background Change
// =============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 100){

        header.style.background="#111";

    }

    else{

        header.style.background="rgba(0,0,0,0.45)";

    }

});

// =============================
// Fade-in Animation
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section=>{

    observer.observe(section);

});