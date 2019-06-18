console.beep = ({frequency = 500, duration = 100, volume = 25, type = 'square'} = {}) => {

    let audio = new AudioContext()

    let createAudio = audio.createOscillator()
    let audioSettings = audio.createGain()

    audioSettings.connect( audio.destination )
    audioSettings.gain.value = volume * 0.01
    
    createAudio.connect( audioSettings )
    createAudio.type = type
    createAudio.frequency.value = frequency
    createAudio.start( audio.currentTime )
    createAudio.stop( audio.currentTime + ( duration * 0.001 ) )

}