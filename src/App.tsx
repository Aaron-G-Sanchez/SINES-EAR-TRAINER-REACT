import './App.scss'
import {beginner} from'./public/frequencies.json'
import { FrequencyCard } from './components/frequency_card/FrequencyCard'

export const App = () => {
  const levelOne: number[] = beginner

  return (
    <>
      <header>
      <h1>SINES EAR TRAINER</h1>
      </header>
      <main>
        {levelOne.map((freq: number, idx: number) => (
          <FrequencyCard 
            key={idx}
            freq={freq}
          />
        ))}
      </main>
    </>
  )
}

