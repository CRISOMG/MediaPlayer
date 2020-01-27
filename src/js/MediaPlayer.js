function MediaPlayer(config) {
this.media = config.el;

}

MediaPlayer.prototype.togglePlay = () => {
    if(this.media.played){
        media.play()
    }else{
        media.pause()
    }
}


export default