import React, {useState} from 'react';
import './App.css';
import { InputSearch } from './BookSearch';
import { Counter } from "./Counter"
import { BooksAviable } from "./BooksAvailable";
import { ListBooksApi } from './ListBooks';
import { RangeSearch } from './RangeSearch';

function App() {
  
  const [listBooks, setListBooks] = useState([])
  return (
    <React.Fragment>
      <Counter/>
      <BooksAviable total={listBooks.length}/>
      <RangeSearch setBookList={setListBooks}/>
      <InputSearch setbooklist={setListBooks}/>
      <ListBooksApi listbooks={listBooks}/>
    </React.Fragment>
  )
}

export default App
