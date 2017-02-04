//get each data-time element on each li element
const videosNodes = document.querySelectorAll('[data-time]');
const videosArray = [...videosNodes];

const seconds = videosArray
    .map(video => video.dataset.time)
    .map(time => converToSeconds(time))//convert time to seconds
    // takes an arrray and can return anything. First item is always total, second Item is the el passed in
    .reduce( (total, seconds) => total + seconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600); //3600 sec in one hour
    secondsLeft = secondsLeft % 3600; // secondsLeft - (hours * 60 * 60)
    
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

//total
console.log( hours + ":" + mins + ":" + secondsLeft);

function converToSeconds(time) {
  let timeSplit = time.split(':').map(parseFloat); //parseFloat returns the number into each split item
  // const min = timeSplit[0];
  // const sec = timeSplit[1];
  const [min, sec] = timeSplit;

  return sec + (min * 60);
}
