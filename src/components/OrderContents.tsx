import { formatCurrency } from '../helpers';
import {  OrderItem } from '../types';
import { Dispatch } from 'react';
import { OrderActions } from '../reducers/order-reducer';

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
};


export const OrderContents = ({order, dispatch} : OrderContentsProps ) => {
  return (
    <div>
        <h2 className='font-black text-4xl'>Order</h2>
        <div className=' space-y-3 mt-8'>
            {order.map(item => (
                        <div key={item.id} className='flex justify-between items-center border-b border-gray-300 p-3'>
                            <p>{item.name} <span className='font-bold'>-</span> {formatCurrency(item.price)} x {item.quantity}</p>
                            <div className='flex justify-end gap-2 items-center text-center'>
                            <p className='font-semibold'>{formatCurrency(item.price * item.quantity)}</p>
                            <button className='inline-block rounded-full border-2 border-red-500 px-2 py-[4px] text-xs font-medium leading-normal text-red-500 transition duration-150 ease-in-out hover:border-red-600 hover:bg-red-50/50 hover:text-red-600' onClick={() => dispatch({ type: 'remove-item', payload: { id : item.id } } )}>X</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    </div>
  )
}
