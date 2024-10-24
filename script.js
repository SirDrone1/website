const phrases = [
    "مرحبًا بك في عائلتنا", 
    "استعد لتجربة رائعة في ورثينغتون",
    "سعادة وأستمتاع بلا حدود",
    "أحصل على جوائز قيمة كونك من العائلة",
    "أدخل إلى عالم مليء بالمتعة والتحدي",
];
let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
    if (phraseIndex < phrases.length) {
        if (isDeleting) {
            currentPhrase = phrases[phraseIndex].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentPhrase = phrases[phraseIndex].substring(0, charIndex + 1);
            charIndex++;
        }

        document.getElementById("typing-text").textContent = currentPhrase;

        if (!isDeleting && charIndex === phrases[phraseIndex].length) {
            setTimeout(() => { 
                isDeleting = true; 
            }, 600);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            setTimeout(() => { 
                type(); 
            }, 500);
            return;
        }
    } else {
        phraseIndex = 0;
    }

    setTimeout(type, isDeleting ? 30 : 30);
}
type();
function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function() {
        current += increment;
        document.getElementById(id).innerHTML = current + '<span class="plus">+</span>';
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
    animateValue("discord-members", 0, 383);
    animateValue("family-factions", 0, 246);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});