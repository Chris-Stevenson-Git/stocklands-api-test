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
    data: []
  }


  componentDidMount(){

  }//component did mount


  render(){


    return (
      <div>
        <Navigation />
        <div className='pageBody'>
          <Datagrid data={this.state.data}/>
        </div>
      </div>
    );// return
  }//render
}// class App

export default App;