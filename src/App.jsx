import React, {Component} from 'react'
 import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage'
import BookShelves from './BookShelves'

class BooksApp extends Component {
  state = {
     myReadBooks: [],
     foundByTermBooks: [] 
  }
  
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({myReadBooks : this.mapResultsToObject(books)})
    })
  }

  onSearchBooks = (terms) => {
       BooksAPI.search(terms, 100).then(books => {
            this.setState({foundByTermBooks : this.mapResultsToObject(books)})
          })
  }
  
  moveBookToShelf = (id, shelf) => {
       BooksAPI.get(id).then(book => {
         BooksAPI.update(book, shelf)
         BooksAPI.getAll().then(books => {
              this.setState({myReadBooks : this.mapResultsToObject(books)})
            })
       })
    
  }

  mapResultsToObject = (results) => {
     return results.map(book => {
        return {
                id: book.id,
                img: book.imageLinks.thumbnail,
                title: book.title,
                authors: book.authors.join(''),
                shelf: book.shelf
              }
           })
  }

  render() {
    return (
      <div className="app">
         <Route exact path="/" render={() => (<BookShelves books={this.state.myReadBooks} moveBookToShelf={this.moveBookToShelf}/>)}/>
         <Route exact path="/search" render={() => (<SearchPage books={this.state.foundByTermBooks} onSearchBooks={this.onSearchBooks} moveBookToShelf={this.moveBookToShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
