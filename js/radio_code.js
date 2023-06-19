

const audio = document.getElementById('audioPlayer')
let btnPlayPause = document.getElementById('btn_playPause')
let playPause_icon = document.getElementById('playPause_icon')

btnPlayPause.addEventListener('click', () =>{
    if (audio.paused) {
        audio.play()
        playPause_icon.src='assets/icon/pausa.png'
    }else{
        audio.pause()
        playPause_icon.src='assets/icon/play3.png'
    }
})



