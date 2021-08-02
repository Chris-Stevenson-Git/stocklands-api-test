import React from 'react'
import Form from 'react-bootstrap/Form'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBBtn,
    CBDContainer
  } from 'cdbreact';


import '../style/Dashboard.css'

const businessUnits = ['Retail', "Residential", "MixedBU"];
const postType = ["Replies", "Unpublished Posts", "Comments", "Media Mentions", "Mentions", "Tags", "Posts", "Reply", "Comment Mentions", "Photos"];
const region = ["NSWS", "QLD", "NSW", "NSWN", "WA", "NAT", "VIC"];
const sentiment = ["Positive", "Neutral", "Negative"];
const subType = ["Not provided", "Events & Entertainment", "Community | Village | Centre Amenity", "Stockland", "Product Availability & Pricing", "Promotions & Incentives", "Building, Landscaping & Design", "Community and Sustainability", "Contract Information", "Lost & Found", "Maintenance & Cleanliness", "Safety & Security"]
const topic = ["No Content", "Event - Kids Activities", "Retailer", "Owned Post", "Liveability", "Parks & Playgrounds", "Event - Other", "House / Land Now Selling", "Dining & Meals", "Store Opening", "Offer / Promotion", "Construction Update", "Environmental", "Campaign", "Location Query", "Traffic & Parking", "Affordability", "Lost Item", "Fundraising / Charity / Donation", "Competition", "Local Business", "Suggestion", "Cleanliness", "Stage Release", "Trading Hours", "Diversity and Inclusion", "Education", "Non-Owned Account", "Event - RL", "Display Village", "Cost Structure", "Transport", "Hazard", "Reported", "Security", "Maintenance", "Builder / Contractor", "Design Guidelines", "Emergency", "Council / Government", "Sales and Information Centre", "Community Discussion", "Suspicious Persons / Activity", "Careers", "Public Toilets"]
const indicator = ["COVID19"]



class Sidebar extends React.Component{


    state = {
        selectedFilters: {
            "Business Unit": 'Any',
            "Post Type": 'Any',
            "Region": 'Any',
            "Sentiment": 'Any',
            "Sub Type": 'Any',
            "Topic": 'Any',
            'indicator': 'Any'
        }
    }

    handleSubmit = (ev) => {
        this.props.sendData(this.state.selectedFilters)
    }


    //Function to handle updating the state of the selected filters
    handleUpdate = (ev) => {
        this.setState(prevState => ({
            selectedFilters: {
                ...prevState.selectedFilters,
                [ev.target.name]: ev.target.value
            }
        }))
    }




    render(){
        return(
            <div className='sidebar'>
                <CDBSidebar>

                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <span>Filters</span>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className='sidebar-content'>
                        <form>
                            <CDBSidebarMenu>
                                <CDBSidebarMenuItem>
                                    <h4>Business Unit</h4>
                                    <select name='Business Unit' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            businessUnits.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Post Type</h4>
                                    <select name='Post Type' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            postType.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Region</h4>
                                    <select name='Region' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            region.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Sentiment</h4>
                                    <select name='Sentiment' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            sentiment.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Sub Type</h4>
                                    <select name='Sub Type' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            subType.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Topic</h4>
                                    <select name='Topic' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            topic.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <br/>
                                <CDBSidebarMenuItem>
                                    <h4>Indicator</h4>
                                    <select name='indicator' onChange={this.handleUpdate}>
                                        <option name='Any'>Any</option>
                                        {
                                            indicator.map(item => (
                                                <option name={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </CDBSidebarMenuItem>
                                <CDBBtn color='primary' onClick={this.handleSubmit}>Apply Filter</CDBBtn>

                            </CDBSidebarMenu>
                        </form>

                    </CDBSidebarContent>

                </CDBSidebar>

            </div>
        );//return
    }//render
}//class Sidebar

export default Sidebar