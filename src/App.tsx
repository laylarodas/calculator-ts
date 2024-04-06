import { MenuItem } from './components/MenuItem'
import { OrderContents } from './components/OrderContents';
import { OrderTotals } from './components/OrderTotals'
import { TipPercentageForm } from './components/TipPercentageForm';
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import { orderReducer, initialState } from './reducers/order-reducer'
import { useReducer } from 'react';


function App() {

  const { order, removeItem, tip, setTip, placeOrder } = useOrder();
  const [ state, dispatch ] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Order Calculator</h1>
      </header>

      <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>

          <h2 className=' text-4xl font-black'>Menu</h2>

          <div className='space-y-3 mt-8'>
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>

        </div>

        <div className=' border border-dashed border-slate-300 p-5 rounded-lg'>

          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className='text-gray-500 text-center'>No order yet</p>
          )}

        </div>
      </main>
    </>
  )
}

export default App
