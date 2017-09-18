import React, {Component} from 'react'
import './App.css'

class ShelfChanger extends Component {
 render(){
   const {book, moveBookToShelf} = this.props
   const options = [{value: "currentlyReading", text: "Currently Reading"},
                    {value: "wantToRead", text: "Want to Read"},
                    {value: "read", text: "Read"},
                    {value: "none", text: "None"}]
     return(
          <div className="book-shelf-changer">
                              <select onChange={(event) => moveBookToShelf(book, event.target.value)}>
                                <option disabled value="none" >Move to...</option>
                                {options.map((option) =>{
                                     return option.value === book.shelf ? (<option value={option.value} selected>{option.text}</option>) :
                                      (<option value={option.value}>{option.text}</option>)
                                 }
                                )}
                               
                              </select>
          </div>
     )
 }

}


export default ShelfChanger