const multiElement = document.querySelector('.multi');
const videoElement = document.querySelector('.bo6-video');

multiElement.addEventListener('mouseover', () => {
    videoElement.play(); // Play the video on hover
});

multiElement.addEventListener('mouseout', () => {
    videoElement.pause(); // Pause the video when not hovering
    videoElement.currentTime = 0; // Reset to the beginning
});