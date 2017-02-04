window.addEventListener('scroll', checkScroll);

var scrolling = false;

function checkScroll() {
  if( !scrolling ) {
    scrolling = true;
    (!window.requestAnimationFrame) ? setTimeout(updateArticle, 300) : window.requestAnimationFrame(updateArticle);
  }
}

function updateArticle() {
  console.log("update screen");
  scrolling = false;
}