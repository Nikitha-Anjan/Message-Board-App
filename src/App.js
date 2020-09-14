import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Messages from './components/Messages'

function App(props) {
  return (
    <Router>
      <div>
        <h1>Redux Examples - Exercises</h1>
        <Link to="/messages">Messages</Link>


        <Route path="/messages" component={Messages} />
      </div>
   </Router>
  )
}

export default App
