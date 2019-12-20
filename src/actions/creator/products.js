
import { SORT_PRODUCTS_LOW_HIGH, SORT_PRODUCTS_HIGH_LOW, SORT_PRODUCTS_BY_DISCOUNT, FILTER_PRODUCT_BY_PRICERANGE } from '../types/product';

// Todo - Convert To Dynamic Export On The Fly 

export const sortProductLowToHigh = (payload = null) => {
    return {
        type: SORT_PRODUCTS_LOW_HIGH,
        payload
    }
}

export const sortProductHighToLow = (payload = null) => {
    return {
        type: SORT_PRODUCTS_HIGH_LOW,
        payload
    }
}

export const sortProductByDiscount = (payload = null) => {
    return {
        type: SORT_PRODUCTS_BY_DISCOUNT,
        payload
    }
}

export const filterProductByPriceRange = (payload = null) => {
    return {
        type: FILTER_PRODUCT_BY_PRICERANGE,
        payload
    }
}