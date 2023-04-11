import { useState, useRef } from 'react'

const MainGame = () => {
  const [isMuted, setIsMuted] = useState(false)

  const AudioContext = window.AudioContext || window.webkitAudioContext

  const audioContext = new AudioContext()

  let osc = audioContext.createOscillator()
  let gain = audioContext.createGain()

  osc.connect(gain)
  gain.connect(audioContext.destination)
  osc.start()

  if (isMuted === false) {
    gain.gain.value = 0
  } else {
    gain.gain.value = 1
  }

  const handlePlay = () => {
    setIsMuted(true)
  }

  const handlePause = () => {
    setIsMuted(false)
  }

  console.log(isMuted)

  return (
    <>
      <section>
        <h1 className="title">SINES EAR TRAINER</h1>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </section>
    </>
  )
}

export default MainGame
