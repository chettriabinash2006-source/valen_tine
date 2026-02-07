const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];
const url=[
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
]

let noCount = 0;
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainImage = document.getElementById("main-image");
const question = document.getElementById("question");
let urlcount=0;
noBtn.addEventListener("click", () => {
    noCount++;
    mainImage.src = url[urlcount++];
   
    // 1. Change "No" button text
    const textIndex = Math.min(noCount, phrases.length - 1);
    noBtn.innerHTML = phrases[textIndex];

    // 2. Make "Yes" button bigger
    // Base size is 1.2rem, we increase it significantly with each click
    const newSize = noCount * 1.5 + 1.2; 
    yesBtn.style.fontSize = `${newSize}rem`;
    yesBtn.style.padding = `${noCount * 0.5 + 0.75}rem ${noCount * 1 + 1.5}rem`;

    // 3. Move the No button slightly or keep it responsive
    // In the original, the Yes button eventually covers the screen
});

yesBtn.addEventListener("click", () => {
    // Change image to happy bear
    mainImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    
    // Change text
    question.innerHTML = "Ok yay! \n i❤️You !!";
    question.className = "success-text";

    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
});