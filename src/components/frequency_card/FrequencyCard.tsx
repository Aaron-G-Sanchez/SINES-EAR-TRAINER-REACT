import "./FrequencyCard.scss"

interface Props {
  freq: number
}

export const FrequencyCard = ({ freq }: Props) => {
  const printFreq = (hz: number) => {
    console.log(hz)
  }

  return (
    <>
      <div
        className='frequency-card'
        data-testid='frequency-card'
      >
        <button
          aria-label={`Selector for frequency: ${freq}`}
          className='frequency-card-btn'
          onClick={() => printFreq(freq)}
        >
          {freq}
        </button>
      </div>
    </>
  )
}
