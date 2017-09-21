import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ShelfChanger from './ShelfChanger'
import './App.css'

class SearchPage extends Component {
  render(){
    const books = this.props.books   
    const onSearchBooks = this.props.onSearchBooks 
    const moveBookToShelf = this.props.moveBookToShelf
    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" onChange={(event) => onSearchBooks(event.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.map(book => (
                             <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                       <ShelfChanger book={book} moveBookToShelf={moveBookToShelf}/>
                                      </div>
                                       <div className="book-title">{book.title}</div>
                                       <div className="book-authors">{book.authors.join('')}</div>
                                    </div>
                             </li>
                        ))}

              </ol>
            </div>
          </div>
       
        )
    }
}

export default SearchPage