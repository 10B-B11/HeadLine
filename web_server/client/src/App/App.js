import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import './App.css';

import NewsPanel from '../NewsPanel/NewsPanel';

class App extends React.Component{
  render() {
    return(
      <div>
        <div className='container'>
           <NewsPanel />
        </div>
      </div>
    );
  }
}

export default App;
