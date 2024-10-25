interface Props {
  freq: number
}

export const FrequencyCard = ({ freq } : Props) => {
  return (
    <>
     <div data-testid='frequency-card'>
      <p>{freq}</p>
     </div>
    </>
  )
 
}