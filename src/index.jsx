import React, {useState} from 'react';
import './App.css';
import { InputSearch } from './BookSearch';
import { Counter } from "./Counter"
import { BooksAviable } from "./BooksAvailable";
import { ListBooksApi } from './ListBooks';
import { RangeSearch } from './RangeSearch';
import { SelectedBooks } from './SelectedBooks';

function App() {
  
  const [listBooks, setListBooks] = useState([])
  const [clonedImg,setClonedImg]=React.useState([])

    const handelImageClick=(SelectedBook)=>{
      if(!clonedImg.find((img)=>img.id ===SelectedBook.id)){
        setClonedImg([...clonedImg,SelectedBook])

      }
    }

  return (
    <React.Fragment>
      <Counter TotalBooks={clonedImg.length}/>
      <BooksAviable total={listBooks.length}/>
      <RangeSearch setBookList={setListBooks}/>
      <InputSearch setbooklist={setListBooks}/>
      <ListBooksApi 
        listbooks={listBooks}
        onSelectImg={handelImageClick}  
      />
      <SelectedBooks
        clonedImg={clonedImg}
        inLIst={clonedImg.length}
      />
    </React.Fragment>
  )
}

export default App
