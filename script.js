const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const herImage = document.getElementById('herImage');

const loveMessages = [
    "Buri gihe nkubonye umutima wanjye urishima 💓",
    "You make my world brighter by just knowing you 🌟",
    "Buri munsi ndagukunda kurushaho 💘",
    "I fall in love with you more and more each day 💘",
    "Umutima wanjye uhora uvuga izina ryawe buri gihe 💖",
    "You are the queen of my heart ☁️🌞",
    "My heart whispers your name every moment 💖",
    "Uri impamvu y’ibyishimo byanjye 😊",
    "With you, every day feels like a dream come true 🌈",
    "Being with you feels like home 🏡",
    "Uri urumuri rutazima mu buzima bwanjye ✨"
];

yesBtn.addEventListener('click', () => {
    message.textContent = "You just made me the happiest person alive, Friend From Heaven! 💞 Ngusezeranyije ko buri igihe tuzaba turi kumwe kizaba ari igihe cyihariye kandi kitazibagirana!!!   ESE WAMPA AMAHIRWE YO KUKWITAHO ITEKA RYOSE?";

    // Show her image
    herImage.style.display = "block";

    // Create hearts
    const heartContainer = document.getElementById('heartContainer');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 80 + '%';
        heart.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});

noBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    message.textContent = loveMessages[randomIndex];
});
