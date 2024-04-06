import type { MenuItems } from '../types'
import { OrderActions } from '../reducers/order-reducer';
import { Dispatch } from 'react';

type MenuItemProps = {
  item: MenuItems,
  dispatch: Dispatch<OrderActions>
};


export const MenuItem = ({ item, dispatch } : MenuItemProps) => {
  return (
    <button className=' border-2 border-teal-400 w-full rounded-lg p-3 flex justify-between hover:bg-teal-100' onClick={() => dispatch(
      { type: 'add-item', payload: { item } }
    )}>
      <p>{item.name}</p>
      <p className='font-black'>€{item.price}</p>
    </button>
  )
}
