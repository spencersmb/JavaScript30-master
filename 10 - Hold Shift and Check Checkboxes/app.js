let state = {
  checked: [],
  keyDown: ''
};
const inputs = document.querySelectorAll('.item');
const inputsArray = Array.prototype.slice.call(inputs); //convert nodelist to array

inputsArray.forEach( item => {

  //set index on each item
  const index = inputsArray.indexOf(item);
  const input = item.querySelector('input');
  input.dataset.index = index;

  //add event listener
  input.addEventListener('change', checkbox);

});

function checkbox() {
  console.time('Function #1');
  //check
  if(this.checked && state.keyDown === 16 && state.checked.length > 0){
    let first = state.checked[0];
    let last = this.dataset.index;

    let selected = inputsArray.filter(item => {
      let index = item.children[0].dataset.index;
      console.log("array index ", index);
      console.log("selected item 1 index", first);
      if(index > first && index < last ){
        item.children[0].checked = true;
        // return item.children[0];
      }
    });

    //empty array
    state.checked = [];
  }else{
    state.checked.push(this.dataset.index);
  }

  //uncheck
  if(!this.checked){

    state.checked.findIndex((item, index)=>{
      if(item === this.dataset.index){
        state.checked.splice(index, 1);
      }
    })

  }

  console.log(state);
  console.timeEnd('Function #1')

}

window.document.addEventListener("keydown", function (e) {
  state.keyDown = e.keyCode;
  console.log("keydown");
});

window.document.addEventListener("keyup", function (e) {
  state.keyDown = {};
  console.log("keyup");
});

