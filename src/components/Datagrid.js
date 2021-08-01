import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

import '../style/Dashboard.css'


class Datagrid extends React.Component{

    render(){
        return(
            <Container className='datagrid'>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        );//return
    }//render
}//class Datagrid

export default Datagrid