const IMAGES = [
  'https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andy-ko-fi.png?raw=true',
  'https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andy-patreonfi.png?raw=true',
  'https://github.com/CharlesJGantt/custom-sponsor-slide-show-stream-elements/blob/main/assets/andydonate.png?raw=true'
];

const DISPLAY_TIME = 5000;    // 5 seconds per image
const HIDE_TIME = 180000;     // 3 minutes after all images

let currentIndex = 0;

const container = document.getElementById('slideshow-container');
const image = document.getElementById('slide-image');

function showCurrentSlide() {
  image.src = IMAGES[currentIndex];
  container.classList.remove('hidden');

  setTimeout(() => {
    container.classList.add('hidden');

    currentIndex++;

    if (currentIndex >= IMAGES.length) {
      currentIndex = 0;

      setTimeout(() => {
        showCurrentSlide();
      }, HIDE_TIME);
    } else {
      setTimeout(() => {
        showCurrentSlide();
      }, 500);
    }
  }, DISPLAY_TIME);
}

window.addEventListener('onWidgetLoad', () => {
  showCurrentSlide();
});