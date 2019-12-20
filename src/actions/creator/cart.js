
import { ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART,INCREMENT_PRODUCT_IN_CART,DECREMENT_PRODUCT_IN_CART} from '../types/cart';

// Todo - Convert To Dynamic Export On The Fly 

export const addProductToCart = (payload = null) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload
    }
}

export const removeProductFromCart = (payload = null) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload
    }
}

export const incrementProductInCart = (payload = null) => {
    return {
        type: INCREMENT_PRODUCT_IN_CART,
        payload
    }
}

export const decrementProductInCart = (payload = null) => {
    return {
        type: DECREMENT_PRODUCT_IN_CART,
        payload
    }
}

