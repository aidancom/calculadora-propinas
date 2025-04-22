import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {

  const subTotalAmount  = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])
  const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip])
  const total = useMemo(() => tipAmount + subTotalAmount, [order, tip])


  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-lg">Totales y propinas:</h2>
        <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
        <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
        <p>Total a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>
      </div>
      <button className="uppercase font-black w-full bg-black text-white mt-1 p-3 disabled:opacity-10 cursor-pointer" disabled={total === 0} onClick={() => placeOrder()}>Guardar Orden</button>
    </>
  )
}

export default OrderTotals
