function AutoPause() {
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    
}

AutoPause.prototype.run = function (player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.7 });
    observer.observe(this.player.media);
    // debugger

    document.addEventListener("visibilitychange", this.handleVisibilityChange)

}

AutoPause.prototype.handleIntersection = function (entries) {
    const entry = entries[0]
    // debugger

    if (entry.isIntersecting) {
        this.player.media.play()
    } else {
        this.player.media.pause()
    }
}

AutoPause.prototype.handleVisibilityChange = function () {
const isVisible = document.visibilityState === "visible"; 

if (isVisible) {
        this.player.play()
    } else {
        this.player.pause()
    }
}
export default AutoPause;