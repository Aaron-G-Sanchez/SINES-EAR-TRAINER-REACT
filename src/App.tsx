import "./App.scss"
import { beginner } from "./public/frequencies.json"
import { FrequencyCard } from "./components/frequency_card/FrequencyCard"

export const App = () => {
  const levelOne: number[] = beginner

  return (
    <>
      <main>
        <header>
          <h1 className='title'>SINES EAR TRAINER</h1>
        </header>
        <section className='frequency-cards-container'>
          {levelOne.map((freq: number, idx: number) => (
            <FrequencyCard
              key={idx}
              freq={freq}
            />
          ))}
        </section>
      </main>
    </>
  )
}
