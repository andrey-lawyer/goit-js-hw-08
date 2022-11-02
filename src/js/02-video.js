import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const TIMEVIDEO_KEY = 'videoplayer-current-time';

const timeFunction = function (timeupdate) {
  // console.log(timeupdate.seconds);
  const time = timeupdate.seconds;

  localStorage.setItem(TIMEVIDEO_KEY, time);
  //   console.log(localStorage);
};

player.on('timeupdate', throttle(timeFunction, 1000));

function saveTime() {
  const savedTime = localStorage.getItem(TIMEVIDEO_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
saveTime();
