import { MenuItem, OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderContetProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void;
}

const OrderContents = ({order, removeItem}: OrderContetProps) => {
  return (
    <div>
      <div className='mt-5 space-y-3'>
          {order.map(item => (
            <div key={item.id} className='flex justify-between items-center border-t border-gray-300 py-3 last-of-type:border-b'>
              <div>
              <p className='text-lg'>
                {item.name}
              </p>
              <p className='font-black'>
                Cantidad: {item.quantity} - {formatCurrency(item.price)}
              </p>
              </div>
              <button onClick={() => removeItem(item.id)} className='bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer'>
                X
              </button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default OrderContents
