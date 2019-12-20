import { sortProductHighToLow, sortProductLowToHigh, sortProductByDiscount, filterProductByPriceRange} from '../creator/products';

export const filterProducts = (filterType, payload) => {
    return dispatch => {
        switch (filterType) {
            case 'price_high_low':
                dispatch(sortProductHighToLow());
                break;
            case 'price_low_high':
                dispatch(sortProductLowToHigh());
                break;
            case 'discount':
                dispatch(sortProductByDiscount());
                break;
            case 'price_range_filter':
                dispatch(filterProductByPriceRange(payload));
                break;
            default:
        }
    };
};



