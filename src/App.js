import React from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import TabsContainer from './containers/TabsContainer'

function App(){
    return (
    <div className="App">
      <header className="App-header">
      <h1 className='App-title'>React Movies App</h1>
      </header>

      <SearchContainer/>
      <TabsContainer/>
     
    </div>
  )
}export default App;
