import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItems) => {


        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if (itemExists) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
                
            /*{
                if (orderItem.id === item.id) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 }
                }
                return orderItem
            })*/

            setOrder(updatedOrder)
        } else {

            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id : MenuItems['id']) => {
        setOrder(order.filter(orderItem => orderItem.id !== id))
        
    }


    const placeOrder = () => {  
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}