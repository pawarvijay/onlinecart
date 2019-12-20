
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREMENT_PRODUCT_IN_CART, DECREMENT_PRODUCT_IN_CART } from '../actions/types/cart';

// const initialState = [{ "id": 9091, "name": "Item2", "price": 250, "discount": 15, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" },
// { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" }]

const initialState = []

export default  (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return [...state, { ...action.payload.product, count: 1 }]

        case REMOVE_PRODUCT_FROM_CART:
            let result = state.filter((item) => item.id !== action.payload.product.id)
            return [...result]

        case INCREMENT_PRODUCT_IN_CART:
            return state.map((item) => {
                // Find the item with the matching id
                if (item.id === action.payload.product.id) {
                    // Return a new object
                    return {
                        ...item,  // copy the existing item
                        count: item.count + 1 // increment count
                    }
                }
                // Leave every other item unchanged
                return item;
            });

        case DECREMENT_PRODUCT_IN_CART:
            return state.map((item) => {
                // Find the item with the matching id
                if (item.id === action.payload.product.id) {
                    // Return a new object
                    return {
                        ...item,  // copy the existing item
                        count: item.count - 1 // increment count
                    }
                }
                // Leave every other item unchanged
                return item;
            });

        default:
            return state
    }
}