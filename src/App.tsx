import './App.scss'
import {beginner} from'./frequencies.json'

export const App = () => {

  return (
    <>
     <div>Hello World!</div>
     {beginner.map((freq, idx) => <p key={idx}>{freq}</p>)}
    </>
  )
}

