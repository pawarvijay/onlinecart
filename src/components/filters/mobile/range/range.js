import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import Corerangefilter from "../../range/corerangefilter";

function MydModalWithGrid(props) {
    return (
        <Modal className="px-4 mt-4" {...props} aria-labelledby="contained-modal-title-vcenter" >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Filter Options</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Corerangefilter />
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
                <Button onClick={props.onHide}>Apply</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RangeFilter() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ButtonToolbar style={{ 'display': 'block', 'fontWeight': 'bold' }}>
            <span onClick={() => setModalShow(true)} >Filter</span>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}
export default RangeFilter
