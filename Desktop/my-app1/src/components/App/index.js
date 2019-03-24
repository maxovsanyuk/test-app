import React, {Component} from 'react'

import './style.css'
import ItemList from '../ItemList'
import Pagination from '../Pagination'

function App() {
  return (
    <div className="container">
      <ItemList />
      <Pagination />
    </div>
  );
}

export default App;
