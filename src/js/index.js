import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("#videoElement");
const reproductionButtom = document.querySelector("#reproductionButtom");
const muteButtom = document.querySelector("#muteButtom");

const player = new MediaPlayer({el: video})

reproductionButtom.onclick = () => {player.togglePlay()};
muteButtom.onclick = () =>{player.toggleMute()};