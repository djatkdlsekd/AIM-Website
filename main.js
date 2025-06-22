
var navMenu = document.getElementById("navMenu");
        
function showMenu() {
    navMenu.style.right = "0";
}

function hideMenu() {
    navMenu.style.right = "-200px";
    }

const cards = document.querySelectorAll('.card');

function rotateCards () {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

let int = 
    document.querySelector(".int");
    window.addEventListener("scroll",
    () => {
        let distance = window.innerHeight/2;
        let topVal =
        int.getBoundingClientRect().top;
        let index = -1 * (topVal / distance + 1);
        index = Math.floor(index);
        for (i = 0; i < cards.length; i++) {
            if (i <= index) {
                cards[i].classList.add("away");
            } else {
                cards[i].classList.remove("away");
            }
        }
        rotateCards();
    });