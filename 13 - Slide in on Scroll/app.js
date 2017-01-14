function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function checkSlide(e) {

  sliderImages.forEach(image => {
    //window.scrollY - how far we've scrolled form the top of the browser
    //window.inner height = window height
    //add them together and you get the current position
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2; //keeps track of the scroll at the bottom of the browser

    const imageBottom = image.offsetTop + image.height; // offsetTop gets where the top is in relation to the top + image height gets the bottom of the image

    //is half way
    const isHalfShown = slideInAt > image.offsetTop; //before you get to the top of the image
    const isNotScrolledPassed = window.scrollY < imageBottom; //scrollY is top of browser

    if(isHalfShown && isNotScrolledPassed){
      image.classList.add('active');
    }else{
      image.classList.remove('active');
    }
    console.count(e);
  });
}
const sliderImages = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(checkSlide, 17));