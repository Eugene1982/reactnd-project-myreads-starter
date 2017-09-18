import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage'
import BookShelf from './BookShelf'
import update from 'react-addons-update'; 

class BooksApp extends Component {
 
  state = {
     myReadBooks: [],
     foundByTermBooks: [] 
  }
  
  componentDidMount(){
    BooksAPI.getAll().then(books => {
                this.setState({myReadBooks :books})
    })
  }

  onSearchBooks = (terms) => {
       BooksAPI.search(terms, 100).then(books => {
            this.setState({foundByTermBooks : books})
          })
  }
  
  moveBookToShelf = (book, shelf) => {
          BooksAPI.update(book, shelf).then(() => {
               if(shelf==="none"){
                 //remove
                 this.setState(state => ({
                      myReadBooks: this.state.myReadBooks.filter((b)=> b.id !== book.id)  
                  }))
              
                } else {
                  book.shelf = shelf      
                  this.setState(state => ({
                        myReadBooks: update(this.state.myReadBooks, {$merge: [book]})
                    }))
              }
         })
  }


  render() {
    const {myReadBooks, foundByTermBooks} = this.state

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
                <BookShelf title="Want to Read" shelf="wantToRead" books={myReadBooks} moveBookToShelf={this.moveBookToShelf}/>     
                <BookShelf title="Read" shelf="read" books={myReadBooks} moveBookToShelf={this.moveBookToShelf}/>     
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
           )}/>
         <Route exact path="/search" render={() => (<SearchPage books={foundByTermBooks} onSearchBooks={this.onSearchBooks} moveBookToShelf={this.moveBookToShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
