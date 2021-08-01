import React from 'react'
import { Container } from 'react-bootstrap'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'


import Datagrid from './components/Datagrid'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

var url = "https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data";

var xhr = new XMLHttpRequest();

const api_url = 'https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data';
// const api_url = './data-insights-sample-data.json';
// const api_url = 'https://jsonplaceholder.typicode.com/todos/1';

class App extends React.Component {

  state = {
    isLoaded: false,
    // data: [{"Business Unit": "Retail", "Post Origin": "Inbound", "Published Date": "6/05/2021 0:00", "Post Type": "Replies", "Region": "NSWS", "Sentiment": "Neutral", "Classification Type": "Shopping Centre", "Case Type": "Referral", "Sub Type": NaN, "indicator": NaN, "Topic": NaN}, {"Business Unit": "Residential", "Post Origin": "Inbound", "Published Date": "1/05/2021 0:00", "Post Type": "Unpublished Posts", "Region": "QLD", "Sentiment": "Neutral", "Classification Type": NaN, "Case Type": "Referral", "Sub Type": "Not provided", "indicator": NaN, "Topic": "No Content"}, {"Business Unit": "Retail", "Post Origin": "Inbound", "Published Date": "6/05/2021 0:00", "Post Type": "Replies", "Region": "NSWS", "Sentiment": "Neutral", "Classification Type": NaN, "Case Type": NaN, "Sub Type": NaN, "indicator": NaN, "Topic": NaN}, {"Business Unit": "Retail", "Post Origin": "Inbound", "Published Date": "2/03/2021 0:00", "Post Type": "Comments", "Region": "NSWS", "Sentiment": "Neutral", "Classification Type": "Shopping Centre", "Case Type": "Comment", "Sub Type": NaN, "indicator": NaN, "Topic": NaN}, {"Business Unit": "Residential", "Post Origin": "Inbound", "Published Date": "13/05/2021 0:00", "Post Type": "Comments", "Region": "NSW", "Sentiment": "Neutral", "Classification Type": NaN, "Case Type": "Referral", "Sub Type": "Not provided", "indicator": NaN, "Topic": "No Content"}, {"Business Unit": "Retail", "Post Origin": "Inbound", "Published Date": "25/04/2021 0:00", "Post Type": "Comments", "Region": "QLD", "Sentiment": "Positive", "Classification Type": "Shopping Centre", "Case Type": "Feedback", "Sub Type": "Events & Entertainment", "indicator": NaN, "Topic": "Event - Kids Activities"}]
  }


  componentDidMount(){

    // fetch('https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data')
    //     .then(async response => {
    //         const data = await JSON.parse(response.replace(/\bNaN\b/g, "null"));
    //         // check for error response
    //         if (!response.ok) {
    //             // get error message from body or default to response statusText
    //             const error = (data && data.message) || response.statusText;
    //             return Promise.reject(error);
    //         }
    //         this.setState({ data: data })
    //     })
    //     .catch(error => {
    //         this.setState({ errorMessage: error.toString() });
    //         console.error('There was an error!', error);
    //     });

    fetch('https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data')
    .then(response => {
      console.log('received response');
      response.json();
    })
    .then(data => {
      console.log(data)
    })

  
  }

  render(){
    return (
      <div>
        <Navigation />
        <div className='pageBody'>
          <Sidebar />
          <Datagrid />
        </div>
      </div>
    );// return
  }//render
}// class App

export default App;