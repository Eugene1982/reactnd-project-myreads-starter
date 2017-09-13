import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage'
import BookShelves from './BookShelves'

class BooksApp extends Component {
  state = {
      
  }

  render() {
    return (
      <div className="app">
         <Route exact path="/" render={() => (<BookShelves/>)}/>
         <Route exact path="/search" render={() => (<SearchPage/>)}/>
      </div>
    )
  }
}

export default BooksApp
