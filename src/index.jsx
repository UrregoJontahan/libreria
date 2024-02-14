import React from 'react';
import './App.css';
import { InputSearch } from './BookSearch';
import { Counter } from "./Counter"
import { BooksAviable } from "./BooksAvailable";
import { ListBooksApi } from './ListBooks';
import { RangeSearch } from './RangeSearch';

function App() {

  return (
    <React.Fragment>
      <Counter/>
      <InputSearch/>
      <BooksAviable/>
      <RangeSearch/>
      <ListBooksApi/>
    </React.Fragment>
  )
}

export default App
