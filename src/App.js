import React from 'react'


import Datagrid from './components/Datagrid'
import Navigation from './components/Navigation'


class App extends React.Component {


  render(){


    return (
      <div>
        <Navigation />
        <div className='pageBody'>
          <Datagrid/>
        </div>
      </div>
    );// return
  }//render
}// class App

export default App;