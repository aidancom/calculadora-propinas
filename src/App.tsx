import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

const App =() => {
  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-medium">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2">
        <div>
          <h2 className="pb-5 font-black text-4xl">Menú</h2>
          <div className="space-y-5">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem}/>
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ml-10">
        <h2 className="pb-5 font-black text-4xl">Consumo</h2>
        {order.length === 0 ? (
          <>
            <p className="text-center">No hay ordenes</p>
          </>
        ) : (
          <>
             <OrderContents order={order} removeItem={removeItem}/>
            <TipPercentageForm setTip={setTip} tip={tip}/>
            <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
          </>
        )
        
        }

        </div>
      </main>
    </>
  )
}

export default App
