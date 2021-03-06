function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer()
    this._initPlugins()
}
MediaPlayer.prototype.initPlayer = function () {
    this.container = document.createElement('div');

    this.container.style.position = 'relative'
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}
MediaPlayer.prototype.play = function () {
    this.media.play()
}
MediaPlayer.prototype.pause = function () {
    this.media.pause()
}
MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {
        this.media.muted = false
    } else {
        this.media.muted = true
    }
}


export default MediaPlayer;