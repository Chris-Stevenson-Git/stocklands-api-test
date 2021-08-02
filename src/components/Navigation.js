import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import '../style/Dashboard.css'


class Navigation extends React.Component{

    render(){
        return(
            <Navbar>
                    <Navbar.Brand >Chris Stevenson Tech Test</Navbar.Brand>
            </Navbar>
        );//return
    }//render
}//class Navigation

export default Navigation