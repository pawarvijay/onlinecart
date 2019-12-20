import React from 'react';
import { connect } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap';

import './products.scss';
import MicroProduct from '../microProdut/microProduct';
import SortBy from '../sortBy/sortby'

import 'rc-slider/assets/index.css';

import RangeFilter from '../filters/range/corerangefilter';
import MobileRangeFilter from '../filters/mobile/range/range';
import MobileSort from '../filters/mobile/sort/sortby';
import { withRouter } from 'react-router-dom'

class Products extends React.Component {
    render() {
        const { data } = this.props
        return  < Container fluid className="mainContent" >
            <div className='marginForDesktop d-none d-md-block d-lg-block'></div>
            <Row className="justify-content-md-center">
                <Col lg={2} md={1} className={'d-none d-md-block d-lg-block'} >
                    <Row><Col style={{ paddingBottom: 30 }}><strong>Filters</strong></Col></Row>
                    <Row><RangeFilter /></Row>
                    <Row><Col style={{ textAlign: "center" }}><Button variant="primary" className='roundApplyButton'>Apply</Button></Col></Row>
                </Col>
                <Col lg={8} md={8}>
                    <Row>
                        <Col className={'d-none d-md-block d-lg-block'}><SortBy /></Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} xs={6} className="d-block d-md-none text-center p-3 border-right-0 border-bottom">
                            <MobileSort />
                        </Col>
                        <Col md={6} sm={6} xs={6} className="d-block d-md-none text-center p-3 border-left border-bottom">
                            <MobileRangeFilter />
                        </Col>
                    </Row>
                    <Row>
                        {
                            data.map((product) => <Col lg={3} md={4} sm={6} xs={6} key={product.id} className='border p-3 border-top-0 border-right-0'>
                                <MicroProduct product={product} />
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row> 
        </Container >
    }
}

const mapStateToProps = ({ products: { data } }) => {
    return { data }
}

export default connect( mapStateToProps)(Products)


// export default withRouter(connect(mapStateToProps,null)(Products))