import { Dispatch, SetStateAction } from "react"

type TipProps = {
  setTip: Dispatch<SetStateAction<number>>,
  tip: number
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

const TipPercentageForm = ({setTip, tip}: TipProps) => {
  return (
    <>
      <h3 className='font-black text-2xl mb-3'>Propina: </h3>
      <form>
        {tipOptions.map(tipItem => (
          <div key={tipItem.id} className="flex gap-2">
            <input id={tipItem.id} type="radio" name="tip" value={tipItem.value} onChange={e => setTip(parseFloat(e.target.value))} checked={tipItem.value === tip}/> <label>{tipItem.label}</label>
          </div>
        ))}
      </form>
    </>
  )
}

export default TipPercentageForm
