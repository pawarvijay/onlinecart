import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonToolbar, Modal, Form} from 'react-bootstrap';

import './sort.scss'
import store from "../../../../integrations/redux";

import {filterProducts } from '../../../../actions/helpers/product'


class MydModalWithGrid extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            sortOption: ''
        }
    }

    handleChange = (changeEvent) => {
        this.setState({
            sortOption: changeEvent.target.value
        });
    }
    handleCancel = () => {
        this.props.onHide()
    }
    handleSubmit = () => {
        store.dispatch(filterProducts(this.state.sortOption))
        this.props.onHide()
    }
    render() {
        const { props } = this;
        return (
            <Modal className="px-4 mt-4 mobileSortBy" {...props} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <b>Sort By</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <fieldset>
                                <form>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="price_high_low"
                                                checked={this.state.sortOption === 'price_high_low'}
                                                onChange={this.handleChange} />
                                            Price -- High Low
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="price_low_high"
                                                checked={this.state.sortOption === 'price_low_high'}
                                                onChange={this.handleChange} />
                                            Price -- Low High
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="discount"
                                                checked={this.state.sortOption === 'discount'}
                                                onChange={this.handleChange} />
                                            Discount
                                        </label>
                                    </div>
                                </form>
                            </fieldset>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="link" onClick={this.handleSubmit}>Cancel</Button>
                            <Button variant="link" onClick={this.handleSubmit}>Apply</Button>
                        </Col>
                    </Form.Group>
                </Modal.Footer>
            </Modal>
        );
    }
}

function SortFilter() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ButtonToolbar style={{ 'display': 'block', 'fontWeight': 'bold' }}>
            <span onClick={() => setModalShow(true)} >Sort</span>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}
export default SortFilter
