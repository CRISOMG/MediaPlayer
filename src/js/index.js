import MediaPlayer from './MediaPlayer';

const video = document.querySelector("#videoElement");
const reproductionButtom = document.querySelector("#reproductionButtom");
const mutedButtom = document.querySelector("#mutedButtom");

const player = new MediaPlayer({el: video})

const videoImg = document.querySelector('.videoRecommended_img');
// const URL = "https://www.youtube.com/watch?v=3hn-6EUz4JE"
// videoImg.onclick = () => open(URL);