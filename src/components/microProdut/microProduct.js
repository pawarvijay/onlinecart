import React from 'react'
import './microProduct.scss';
import { Card, Button } from 'react-bootstrap';
import store from "../../integrations/redux";
import { addProductToCart } from '../../actions/creator/cart';

class microProduct extends React.PureComponent {
    addProductToCart = (product) => {
        store.dispatch(addProductToCart({ product }))
    }
    render() {
        const { product } = this.props
        const { id, name, price, discount, img_url } = product
        return <Card className='microProduct'>
            <Card.Img variant="top" src={img_url} />
            <Card.Body style={{ 'backgroundColor': '#f1f3f6' }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ 'whiteSpace': 'nowrap' }}>
                    <span className='price'> {`₹${price}`}  </span>
                    <span className='pricewithdiscount'><strike> {Math.round(price + (price * discount / 100))}</strike></span>
                    <span className='discountPerText'>{` ${discount}% off`}</span>
                </Card.Text>
                <Button onClick={() => this.addProductToCart(product)} variant="warning" className='roundCartButton text-nowrap' size="sm">Add to Cart</Button>
            </Card.Body>
        </Card>
    }
}

export default microProduct
