let loadingText = document.querySelector('.loading-text');
let counter = 0;
const maxCount = 100; // Adjust this to set the maximum number

function updateLoadingText() {
    if (counter <= maxCount) {
        loadingText.textContent = `Loading... ${counter}%`;
        counter++;
        setTimeout(updateLoadingText, 20); // Update every 20 milliseconds (adjust as needed)
    }
}

updateLoadingText();


gsap.to('#loding_page',{
    y:50,
    opacity:0,
    duration:.2,
    delay:3.5,
})