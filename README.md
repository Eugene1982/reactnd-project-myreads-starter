# MyReads: A Book Lending App

This is the first assessment project for Udacity's React Fundamentals course.
## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for app. 
    ├── App.jsx # This is the root of app. 
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    ├── index.js # It is used for DOM rendering only.
	├── BookShelf.jsx # Represents one shelf of books (f.e. Currently reading, Read..)
	├── SearchPage.jsx # Search books component. 
	└── ShelfChanger.jsx # Popup component, used to select shelf for a book

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How to use project

The main page shows a control that allows users to move books between shelves. When clickin on "+" button, users are redirected to search page, where they can find books and move them to specific shelves.