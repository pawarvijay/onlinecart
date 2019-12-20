const computeCartDetails = (cart) => {

    if (cart.length == 0) return { totalPrice: 0, totalDiscount: 0, TotalPayable: 0 }

    let result = {}

    result.totalPrice = cart.map((curr) => curr.price * curr.count).reduce((curr, accum) => curr + accum)

    result.totalDiscount = cart.map((curr) => (curr.price * curr.count) * curr.discount / 100).reduce((curr, accum) => curr + accum)

    result.TotalPayable = result.totalPrice - result.totalDiscount

    return result

}

const computeCartCount = (cart) => cart.map((curr) => curr.count).reduce((curr, accum) => curr + accum)

export { computeCartDetails, computeCartCount };