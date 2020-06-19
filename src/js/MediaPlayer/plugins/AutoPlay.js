function AutoPlay(){}

AutoPlay.prototype.run = function(player){
    player.toggleMute();
    player.togglePlay();
}

export default AutoPlay;