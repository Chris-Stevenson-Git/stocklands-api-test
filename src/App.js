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
    data: []
  }


  componentDidMount(){

    fetch('https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data')
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ data: data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

  
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