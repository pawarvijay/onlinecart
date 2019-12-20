import React, { useState } from 'react'
import { Tabs, Tab, Row, Nav, Col } from 'react-bootstrap';
import store from "../../integrations/redux";
import { filterProducts } from '../../actions/helpers/product'

import './sortby.scss';

class NavBar extends React.Component {
    handleClick = (key) => store.dispatch(filterProducts(key))

    render() {
        return (
            <Row className='sortBy'>
                <div className='sortbytext'><strong>Sort By </strong></div>
                <div style={{ "width": '89%' }}>
                    <Tabs id="uncontrolled-tab-example" onSelect={key => this.handleClick(key)}>
                        <Tab eventKey="price_high_low" title="Price -- High Low" >
                        </Tab>
                        <Tab eventKey="price_low_high" title="Price -- Low High">
                        </Tab>
                        <Tab eventKey="discount" title="Discount">
                        </Tab>
                    </Tabs>
                </div>
            </Row>
        );
    }
}

export default NavBar;