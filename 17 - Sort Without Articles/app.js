const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const check = ['The', 'A', 'An'];
//use array sort to the Band names but do not use THE, A, or AN as words that are included in the sort ?

function strip(bandName){
  
  //simple regex to replace a, the, an thats case insensitive
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {

  if( strip(a) > strip(b)){
    return 1;
  }else{
    return -1;
  }

});

console.log(bands);

// Set the HTML
document.querySelector('#bands').innerHTML =
    sortedBands
        // Return array of li elements
        .map( band => `<li>${band}</li>` )

        //then join the array to remove commas
        .join("");
