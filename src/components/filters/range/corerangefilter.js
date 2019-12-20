import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Slider from 'rc-slider';

import store from "../../../integrations/redux";
import { filterProducts } from '../../../actions/helpers/product';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);




class CoreRangeFilter extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { start: '', end: '' }
    }
    log = (value) => {
        this.setState({ start: value[0], end: value[1] })
        store.dispatch(filterProducts('price_range_filter', { greaterThan: this.state.start, lessThan: this.state.end }))
    }
    render() {
        return <Col style={{ paddingBottom: 30, color: 'grey', fontWeight: 'bold' }}>
            <Row>
                <Col xs={4} style={{ textAlign: 'left' }}>₹{this.state.start}</Col>
                <Col xs={4}></Col>
                <Col xs={4} style={{ textAlign: 'right' }}>₹{this.state.end}</Col>
            </Row>
            <Row><Range allowCross={false} defaultValue={[100, 300]} min={0} max={800} onChange={this.log} /></Row>
            <Row><Col style={{ textAlign: 'center' }}>Price</Col></Row>
        </Col>

    }
}

export default CoreRangeFilter