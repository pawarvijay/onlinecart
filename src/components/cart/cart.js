import React from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import './cart.scss';
import { removeProductFromCart, incrementProductInCart, decrementProductInCart } from '../../actions/creator/cart';
import store from "../../integrations/redux";
import { computeCartDetails } from '../../actions/helpers/cart';

class Cart extends React.Component {
    removeProductFromCart = (product) => {
        store.dispatch(removeProductFromCart({ product }))
    }

    incrementInCart = (product) => {
        store.dispatch(incrementProductInCart({ product }))
    }
    decrementInCart = (product) => {
        store.dispatch(decrementProductInCart({ product }))
    }
    render() {
        let { totalPrice, totalDiscount, TotalPayable } = this.props.computation
        return < Container fluid className="cart" >
            <div className='marginForDesktop d-none d-md-block d-lg-block'></div>
            < Row className="justify-content-md-center" >
                <Col lg={6}>
                    {this.props.cart.map((item) => (
                        <Row className='row' key={item.id} >
                            <Col>
                                <Row>
                                    <Col xs={5} lg={3}>
                                        <Image className="img-fluid img-thumbnail" src={item.img_url} style={{ height: 200 }} />
                                    </Col>
                                    <Col xs={7}>
                                        <Row>
                                            <Col sm={3}>{item.name}</Col>
                                            <Col sm={3}>
                                                <div style={{ 'whiteSpace': 'nowrap' }}>
                                                    <span className='price'> {`₹${item.price}`}  </span>
                                                    <span className='pricewithdiscount'><strike> {Math.round(item.price + (item.price * item.discount / 100))}</strike></span>
                                                    <span className='discountPerText'>{` ${item.discount}% off`}</span>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Button onClick={() => this.decrementInCart(item)} variant="primary" className='roundApplyButton'>-</Button>
                                                {item.count}
                                                <Button onClick={() => this.incrementInCart(item)} variant="primary" className='roundApplyButton'>+</Button>
                                            </Col>
                                            <Col sm={3} className='m-2'>
                                                <Button onClick={() => this.removeProductFromCart(item)} variant="warning" className='roundCartButton text-nowrap' size="sm">Remove from Cart</Button>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col lg={3}>
                    <Card bg="" style={{ width: '18rem' }}>
                        <Card.Header>Price Details</Card.Header>
                        <Card.Body>
                            <Row>{`Price         ${totalPrice}`}</Row>
                            <Row>{`Discount      ${totalDiscount}`}</Row>
                        </Card.Body>
                        <Card.Footer>Total Payable  {TotalPayable}</Card.Footer>
                    </Card>

                </Col>
            </Row >
        </Container >

    }
}
const mapStateToProps = ({ cart }) => {
    console.log(cart)
    return {
        cart: cart,
        computation: computeCartDetails(cart)
    }
}

export default connect(mapStateToProps)(Cart)
