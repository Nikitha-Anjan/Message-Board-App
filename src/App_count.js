import React from 'react';
// connect allows us to dispatch or read values from store into component
import { connect } from 'react-redux'
import { increment } from './actions/countAction'

import Btn from './components/Btn'

function App(props) {
  return (
   <div>
    <h1>Redux Examples - Exercises</h1>
    <h1>Count - { props.count }</h1>
    <button onClick={() =>{ 
        props.dispatch(increment())
    }}>+</button>

    <Btn />
   </div>
  );
}

// const EnhancedComponent = connect()(App)
// export default EnhancedComponent

const mapStateToProps = (state) => { 
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App)
// export default App