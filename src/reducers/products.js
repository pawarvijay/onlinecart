import { SORT_PRODUCTS_LOW_HIGH, SORT_PRODUCTS_HIGH_LOW, SORT_PRODUCTS_BY_DISCOUNT, FILTER_PRODUCT_BY_PRICERANGE } from '../actions/types/product'

let productList = [{ "id": 9090, "name": "Item1", "price": 200, "discount": 10, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9091, "name": "Item2", "price": 250, "discount": 15, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9092, "name": "Item3", "price": 320, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9093, "name": "Item4", "price": 290, "discount": 0, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9094, "name": "Item1", "price": 500, "discount": 25, "category": "thriller", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9095, "name": "Item2", "price": 150, "discount": 5, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9096, "name": "Item3", "price": 700, "discount": 22, "category": "literature", "img_url": "http://lorempixel.com/500/600/technics/" },
{ "id": 9097, "name": "Item4", "price": 350, "discount": 18, "category": "fiction", "img_url": "http://lorempixel.com/500/600/technics/" }]
const initialState = {
  data: [...productList],
  filter: {
    price: {
      defaultRange: { start: 100, end: 300 },
      total: 2750
    }
  }
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS_LOW_HIGH:
      return { ...initialState, data: [...productList.sort((a, b) => a.price - b.price)] }

    case SORT_PRODUCTS_HIGH_LOW:
      return { ...initialState, data: [...productList.sort((a, b) => b.price - a.price)] }

    case SORT_PRODUCTS_BY_DISCOUNT:
      let data = toggle() ? productList.sort((a, b) => a.discount - b.discount) : productList.sort((a, b) => b.discount - a.discount)
      return { ...initialState, data: [...data] }

    case FILTER_PRODUCT_BY_PRICERANGE:
      return { ...initialState, data: [...productList.filter(product => product.price >= action.payload.greaterThan && product.price <= action.payload.lessThan)] }

    default:
      return state
  }
}

const toggle = (() => {
  let ascending = false;
  return () => {
    return ascending = !ascending;
  }
})()

export default products