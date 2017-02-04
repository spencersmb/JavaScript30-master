const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearAllBtn = document.getElementById('clear');
const checkAllBtn = document.getElementById('check_all');
const uncheckAllBtn = document.getElementById('uncheck_all');


function clearAll(e) {
  e.preventDefault();
  localStorage.clear();

  //remove all elements from ul
  itemsList.innerHTML = '';
}

function checkAll(e) {

  e.preventDefault();
  let inputs = itemsList.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(input => input.checked = true);

  //set all items to checked
  //then set to localstorage
  let allItemsChecked = items.map(item => {
    item.done = true;
    return item;
  });

  localStorage.setItem('items', JSON.stringify(allItemsChecked) );
}

function uncheckAll(e) {

  e.preventDefault();
  let inputs = itemsList.querySelectorAll('input[type="checkbox"]');
  inputs.forEach(input => input.checked = false);

  //set all items to checked
  //then set to localstorage
  let allItemsUnchecked = items.map(item => {
    item.done = false;
    return item;
  });

  localStorage.setItem('items', JSON.stringify(allItemsUnchecked) );
}

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector('[name=item]').value; //this refers to the form tag
  const item = {
    text, //automaticall adds the variable name as the key and then adds the value automatically
    done: false
  };

  //create array new objects
  items.push(item);

  //create html string for each li element based on objects passed in
  populateList(items, itemsList);

  //add event listeners to each li item added
  // addNewListener();

  //store items to localstorage
  localStorage.setItem('items', JSON.stringify(items) );

  //reset the form
  this.reset();
}

function populateList( list = {}, container ) {
  container.innerHTML = list.map((item, i) => {
    return `
        <li>
            <input type="checkbox" data-index="${i}" id="item_${i}" ${(item.done) ? "checked" : ''}>
            <label for="item_${i}">${item.text}</label>
        </li>
    `;
  }).join(''); //convert array to one long string


}

function handleInput(e){

  if (!e.target.matches('input')) return; // skip this unless it's an input

  const el = e.target;
  const index = el.dataset.index;
  //
  items[index].done = !items[index].done;
  //
  localStorage.setItem('items', JSON.stringify(items) );
}

//first attempt
function addNewListener(){
  inputs = itemsList.querySelectorAll('input[type="checkbox"]');
  return inputs.forEach(item => item.addEventListener('change', handleInput));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', handleInput);
clearAllBtn.addEventListener('click', clearAll);
checkAllBtn.addEventListener('click', checkAll);
uncheckAllBtn.addEventListener('click', uncheckAll);

populateList(items, itemsList);
