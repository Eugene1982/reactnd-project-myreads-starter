import React, {Component} from 'react'
 import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage'
import BookShelves from './BookShelves'

class BooksApp extends Component {
  state = {
     books: [] 
  }
  
  componentDidMount(){
    BooksAPI.getAll().then(b => {
     const books =  b.map(book => {
        return {
                id: book.id,
                img: book.imageLinks.thumbnail,
                title: book.title,
                authors: book.authors.join(''),
                shelf: book.shelf
        }
      })
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
         <Route exact path="/" render={() => (<BookShelves books={this.state.books}/>)}/>
         <Route exact path="/search" render={() => (<SearchPage books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
