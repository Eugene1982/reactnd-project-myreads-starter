import React, {Component} from 'react'
import './App.css'

class ShelfChanger extends Component {
 render(){
   const {id, moveBookToShelf} = this.props
     return(
          <div className="book-shelf-changer">
                              <select onChange={(event) => moveBookToShelf(id, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
          </div>
     )
 }

}


export default ShelfChanger