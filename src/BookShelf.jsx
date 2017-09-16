import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'

class BookShelf extends Component {
    
    
    render(){
      const {books, title, shelf} = this.props
  
      return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                   
                        {books.filter(b => b.shelf === shelf)
                               .map(book => (
                             <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.img})`}}></div>
                                       <ShelfChanger id={book.id} moveBookToShelf={this.props.moveBookToShelf}/>
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