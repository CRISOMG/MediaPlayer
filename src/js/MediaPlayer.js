function MediaPlayer(config) {
    this.media = config.el;

}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()
    }
}
MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {
        this.media.muted = false
    } else {
        this.media.muted = true
    }
}


export default MediaPlayer;