/* Get Our Elements */

class VideoPlayer {

  constructor(){
    this.player = document.querySelector('.player');
    this.playerControls = document.querySelector('.player__controls');
    this.video = this.player.querySelector('.viewer');
    this.progress = this.player.querySelector('.progress');
    this.progressBar = this.player.querySelector('.progress__filled');
    this.toggle = this.player.querySelector('.toggle');
    this.enlarge_btn = this.player.querySelector('.player__enlarge');
    this.skipButtons = this.player.querySelectorAll('[data-skip]');
    this.ranges = this.player.querySelectorAll('.player__slider');
    this.progress_mouse_down = false;
    this.isFullscreen = this.video.webkitIsFullScreen;
  }

  togglePlay () {

    /* this = this.video */

    if(this.video.paused){
      console.log("play");
      this.video.play();
    }else{
      this.video.pause();
      console.log("pause");
    }

  }

  updatePlayBtn () {
    const icon = this.video.paused ? '►' : '❚ ❚';
    this.toggle.textContent = icon;
  }

  skip (e) {
    //parseFloat incase you have decimals?
    const skiptime = parseFloat(e.target.dataset.skip);
    this.video.currentTime += skiptime;
  }

  handleRangeUpdate(e){
    const slider = e.target;
    const range = slider.value;
    const name = slider.name; //name on the inputs are set to the property name needed to alter the HTML5 video

    this.video[name] = range;
  }

  handleProgress(){
    const percent = (this.video.currentTime / this.video.duration) * 100; //multiply 100 to change .05 to 50 for example
    this.progressBar.style.flexBasis = `${percent}%`;
  }

  scrub(e){
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    console.log(scrubTime );
    this.video.currentTime = scrubTime;
  }

  fullScreenChangeHandler(){
    console.log("fullscreen change");

    this.isFullscreen = document.webkitIsFullScreen;

    if(this.isFullscreen){
      //make nav fullscreen
      this.playerControls.classList.add("fullscreen");
    }else{
      this.playerControls.classList.remove("fullscreen");
    }

    console.log(this.isFullscreen);

  }

  enlarge(){

    if(!this.isFullscreen){
      this.video.webkitRequestFullscreen();
    }else{
      this.video.webkitExitFullscreen();
    }

  }

  init(){
    /* hook up event listeners */
    this.video.addEventListener('click', this.togglePlay.bind(this));

    //play button
    this.toggle.addEventListener('click', this.togglePlay.bind(this));

    //listen for video play and pause
    this.video.addEventListener('play', this.updatePlayBtn.bind(this));
    this.video.addEventListener('pause', this.updatePlayBtn.bind(this));
    this.video.addEventListener('timeupdate', this.handleProgress.bind(this));

    //enlarge button
    this.enlarge_btn.addEventListener('click', this.enlarge.bind(this));

    //progressbar scrub
    this.progress.addEventListener('click', this.scrub.bind(this));
    this.progress.addEventListener('mousemove', (e) => this.progress_mouse_down && this.scrub(e));
    this.progress.addEventListener('mousedown', ()=> this.progress_mouse_down = true);
    this.progress.addEventListener('mouseup', ()=> this.progress_mouse_down = false);

    //skip buttons
    this.skipButtons.forEach(button => button.addEventListener('click', this.skip.bind(this)));

    //range buttons
    this.ranges.forEach(range => range.addEventListener('change', this.handleRangeUpdate.bind(this)));
    this.ranges.forEach(range => range.addEventListener('input', this.handleRangeUpdate.bind(this)));

    document.onwebkitfullscreenchange = this.fullScreenChangeHandler.bind(this);

  }
}

const player = new VideoPlayer();
player.init();