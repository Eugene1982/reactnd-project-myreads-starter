import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage'
import BookShelf from './BookShelf'

class BooksApp extends Component {

  state = {
    myReadBooks: [],
    foundByTermBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ myReadBooks: books })
    })
  }

  onSearchBooks = (terms) => {
    BooksAPI.search(terms, 100).then(books => {
      if (books !== undefined && books.error === undefined) {
        books.forEach(b => {
          var foundBook = this.state.myReadBooks.filter((myBook) => myBook.id === b.id)
          if (foundBook.length > 0) {
            b.shelf = foundBook[0].shelf
          }
        })
      } else {
        books = []
      }
      this.setState({ foundByTermBooks: books })
    })
  }

  addoredit = (arr, book, newShelf) => {
    let copy = [...arr]
    let index = arr.findIndex((b) => b.id === book.id)
    if (index !== -1) {
      copy[index].shelf = newShelf
    } else {
      copy.push(book)
    }
    return copy
  }

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      if (shelf === "none") {
        //remove a book
        this.setState(state => ({
          myReadBooks: this.state.myReadBooks.filter((b) => b.id !== book.id)
        }))

      } else {
        this.setState(state => ({
          myReadBooks: this.addoredit(this.state.myReadBooks, book, shelf),
          foundByTermBooks: this.addoredit(this.state.foundByTermBooks, book, shelf)
        }))
      }
    })
  }


  render() {
    const { myReadBooks, foundByTermBooks } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" shelf="currentlyReading" books={myReadBooks} moveBookToShelf={this.moveBookToShelf} />
                <BookShelf title="Want to Read" shelf="wantToRead" books={myReadBooks} moveBookToShelf={this.moveBookToShelf} />
                <BookShelf title="Read" shelf="read" books={myReadBooks} moveBookToShelf={this.moveBookToShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route exact path="/search" render={() => (<SearchPage books={foundByTermBooks} onSearchBooks={this.onSearchBooks} moveBookToShelf={this.moveBookToShelf} />)} />
      </div>
    )
  }
}

export default BooksApp
