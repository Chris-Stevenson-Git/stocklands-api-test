import React from 'react'
import Nav from 'react-bootstrap/Nav'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import Navlink from 'react-router-dom'

import '../style/Dashboard.css'



class Sidebar extends React.Component{

    render(){
        return(
            <div className='sidebar'>
                <CDBSidebar>

                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <span>Header</span>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className='sidebar-content'>
                        <CDBSidebarMenu>
                            <CDBSidebarMenuItem>
                                One
                            </CDBSidebarMenuItem>
                            <CDBSidebarMenuItem>
                                Two
                            </CDBSidebarMenuItem>
                            <CDBSidebarMenuItem>
                                Three
                            </CDBSidebarMenuItem>

                        </CDBSidebarMenu>
                    </CDBSidebarContent>


                    <CDBSidebarFooter>
                        <div className='sidebar-btn-wrapper'>
                            Footer
                        </div>

                    </CDBSidebarFooter>
                </CDBSidebar>

            </div>
        );//return
    }//render
}//class Sidebar

export default Sidebar