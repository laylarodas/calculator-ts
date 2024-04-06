import type { Dispatch, SetStateAction } from "react"
import { OrderActions } from "../reducers/order-reducer"

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

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>,
    tip: number
}


export const TipPercentageForm = ({ dispatch, tip } : TipPercentageFormProps) => {
    return (
        <div className="p-3">
            <h3 className="font-bold text-lg">Tip:</h3>

            <form action="">
                {tipOptions.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <input type="radio" name="tip" value={option.value} id={option.id} onChange={(e) => dispatch({ type : 'set-tip' , payload : { tip: +e.target.value}})}// + is a unary operator that converts its operand to a number
                        checked={option.value === tip}/>
                        <label htmlFor={option.id}>{option.label}</label>

                    </div>
                ))}
            </form>
        </div>
    )
}
