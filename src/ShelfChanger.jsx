import React, { Component } from 'react'
import './App.css'

function ShelfChanger(props) {
  const { book, moveBookToShelf } = props
  const options = [{ value: "currentlyReading", text: "Currently Reading" },
  { value: "wantToRead", text: "Want to Read" },
  { value: "read", text: "Read" },
  { value: "none", text: "None" }]
  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => moveBookToShelf(book, event.target.value)} value={book.shelf}>
        <option disabled value="no" >Move to...</option>
        {
          options.map((option) => {
            return (<option key={option.value} value={option.value}>{option.text}</option>)
          })
        }
      </select>
    </div>
  )
}

export default ShelfChanger