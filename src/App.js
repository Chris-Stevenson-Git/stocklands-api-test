import React from 'react'
import { Container } from 'react-bootstrap'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Datagrid from './components/Datagrid'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

class App extends React.Component {

  state = {
    isLoaded: false,
    data: []
  }

  componentDidMount(){
    // fetch('https://sob7yipykh.execute-api.ap-southeast-2.amazonaws.com/data-insights-sample-data/',{ 
    // method: 'GET',
    // mode: 'no-cors',
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'Access-Control-Allow-Methods' :    'GET',
    //     "Content-type": "application/json",
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    //   // res.json()
    // })
    // .then((result) => {
    //   console.log('Loaded');
    //   this.setState({
    //     isLoaded: true,
    //     data: result.data
    //   });
    // })

  
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