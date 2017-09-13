import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'

class BookShelf extends Component {
    
    
    render(){
       const books = this.props.books
  
        return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                   
                        {books.map(book => (
                             <li>
                                <div className="book">
                                    <div className="book-top">
                                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.img }}></div>
                                       <ShelfChanger />
                                      </div>
                                       <div className="book-title">{book.title}</div>
                                       <div className="book-authors">{book.authors}</div>
                                    </div>
                             </li>
                        ))}
                    </ol>
                  </div>   
                </div>
           )
    }
}

export default BookShelf