import React from 'react'
import { Container, Form, Button} from 'react-bootstrap';



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

    //Function to send the selected filters to the datagrid component
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
            <Container fluid className='sidebar'>
                <h2>Filters</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Business Unit</Form.Label>
                        <Form.Control as='select' name='Business Unit' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                businessUnits.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Post Type</Form.Label>
                        <Form.Control as='select' name='Post Type' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                postType.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Region</Form.Label>
                        <Form.Control as='select' name='Region' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                region.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sentiment</Form.Label>
                        <Form.Control as='select' name='Sentiment' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                sentiment.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sub Type</Form.Label>
                        <Form.Control as='select' name='Sub Type' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                subType.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Topic</Form.Label>
                        <Form.Control as='select' name='Topic' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                topic.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Indicator</Form.Label>
                        <Form.Control as='select' name='indicator' onChange={this.handleUpdate}>
                            <option name='Any'>Any</option>
                            {
                                indicator.map(item => (
                                    <option name={item}>{item}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Button onClick={this.handleSubmit}>Apply Filters</Button>
                </Form>

            </Container>
        );//return
    }//render
}//class Sidebar

export default Sidebar