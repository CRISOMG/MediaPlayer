import MediaPlayer from './MediaPlayer/MediaPlayer.js';
import AutoPlay from './MediaPlayer/plugins/AutoPlay.js';
import AutoPause from './MediaPlayer/plugins/AutoPause.js';

const video = document.querySelector("#videoElement");
const reproductionButtom = document.querySelector("#reproductionButtom");
const muteButtom = document.querySelector("#muteButtom");

const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay,
        new AutoPause
    ]
})

reproductionButtom.onclick = () => { player.togglePlay() };
muteButtom.onclick = (event) => {

    player.toggleMute()

    if (muteButtom.classList[1]) {
        muteButtom.classList.remove('under')
    } else {
        muteButtom.classList.add('under')
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error);
    })
}
