const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50; // 100px;


function shadow(e) {
  // console.log(e);

  //get width and height of thing we are hovering over
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  //ES6 Destructure Example - the variables here are width and height
  // the hero.offsetWidth -> offsetWidth: width
  const { offsetWidth: width, offsetHeight: height } = hero;

  // x = e.offsetX ->
  let { offsetX: x, offsetY: y } = e;
  console.log(x, y);

  //fix for child elements messing up the hover coordinents
  if( this !== e.target ){

    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

  }

  // with a walk of 100 - the max will be 50 or -50
  // if x = 100 / width = 1000 = 10 - 50 = 40
  // SO now when the cursor is in the bottom right corner x,y reads 50,50 and top left = 0,0
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255, 0.7),
  ${xWalk * 3}px ${yWalk * 3}px 0 rgba(0, 255, 255, 0.7),
  ${xWalk * 5}px ${yWalk * 5}px 0 rgba(0, 0, 0, 0.7),
  ${xWalk * 7}px ${yWalk * 7}px 0 rgba(0, 255, 0, 0.7)
  `;

}

hero.addEventListener('mousemove', shadow);