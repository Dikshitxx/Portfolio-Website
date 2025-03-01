document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const words = ["Front-End Developer", "Graphic Designer", "Freelancer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, charIndex++);
        }

        // Adjust typing and deleting speed
        let typingSpeed = isDeleting ? 100 : 150;

        // Ensure the full word stays visible before deleting starts
        if (!isDeleting && charIndex === currentWord.length + 1) {
            setTimeout(() => {
                isDeleting = true;
                typeEffect(); // Start deleting after delay
            }, 2500); // **Wait 2.5 seconds before deleting**
            return;
        }

        // Ensure last word is fully typed before restarting
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // Small delay before typing next word
            return;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});
