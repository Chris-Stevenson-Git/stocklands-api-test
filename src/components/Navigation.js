import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import '../style/Dashboard.css'


class Navigation extends React.Component{

    render(){
        return(
            <Navbar bg='light'>
                <Navbar.Brand>Stocklands Tech Test</Navbar.Brand>

            </Navbar>
        );//return
    }//render
}//class Navigation

export default Navigation