const checkboxes = document.querySelectorAll('.item input[type=checkbox]');
let lastChecked = this;;


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e){

  let inBetween = false;
  //if shift key is held down
  if(this.checked && e.shiftKey){

    //loop over inputs array
    checkboxes.forEach( checkbox => {

      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }

      if(inBetween){
        checkbox.checked = true;
      }


    });

  }

  lastChecked = this;

}