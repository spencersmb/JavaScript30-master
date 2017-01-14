const pressed = [];
const secretCode = 'spencer';

window.addEventListener('keyup', (e) => {
  let key = e.key;
  pressed.push(key);
  console.log(pressed.length - secretCode.length);
  // use -1 to reach the begining of the array
  // pressed - secretCode length will act as a count down to the array being at max capacity
  // ex: 1 - 7 = 6 after pressing the first keystroke
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  //Converts array to one long string
  if(pressed.join('') === secretCode){
    console.log("DING DING");
  }
  console.log(pressed);
});