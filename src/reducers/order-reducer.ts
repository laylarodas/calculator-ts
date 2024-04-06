import type { MenuItems, OrderItem } from "../types"

export type OrderActions = 
{ type: 'add-item', payload: { item: MenuItems } } |
{ type: 'remove-item', payload: { id : MenuItems['id'] } } |
{ type: 'place-order' } |
{ type: 'set-tip', payload: { tip: number } }


export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}


export const orderReducer = (
    state: OrderState, 
    action: OrderActions 
    ) => {

        if(action.type === 'add-item') {

            const itemExists = state.order.find(orderItem => orderItem.id ===  action.payload.item.id)

            let updatedOrder : OrderItem[] = []
            if (itemExists) {

                updatedOrder = state.order.map(orderItem => orderItem.id ===  action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem )

            } else {
                const newItem : OrderItem = { ...action.payload.item, quantity: 1 }

                updatedOrder = [...state.order, newItem]

            }

            return { 
                ...state, 
                order: updatedOrder 
            }
        }

        if(action.type === 'remove-item') {
            const id = action.payload.id
            return { ...state, order: state.order.filter(orderItem => orderItem.id !== id) }
        }

        if(action.type === 'place-order') {
            return { 
                ...state, 
                order: [],
                tip: 0
            }
        }   


        if(action.type === 'set-tip') {
            const tip = action.payload.tip
            return { ...state, tip }
        }


    return state
}
