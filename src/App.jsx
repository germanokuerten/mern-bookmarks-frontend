import { useState, useEffect } from 'react';
import './App.css';
import Body from './components/body';
import Form from './components/form';
import Header from './components/header';

function App() {
  const[bookmarks, setBookmarks] = useState(null)
  const url = 'https://buenas-noches-backend.herokuapp.com/'

  console.log(bookmarks)
  // const getBookmarks = async () =>{
  //   const data = await fetch(url+'bookmark').then(res => res.json())
  //     console.log(data)
  // }

  async function getBookmarks(){
    //fetch database 
    // to get our bookmarks
    try {
      const data = await fetch(url+'bookmark').then(res => res.json())
      setBookmarks(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  async function createBookmark(bookmark){
    try {
      await fetch(url+'bookmark',{
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify(bookmark)
      })
      getBookmarks()
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{getBookmarks()},[])

  return (
    <div className="App">
      <Header/>
      <Form createBookmark={createBookmark}/>
      <Body bookmarks={bookmarks}/>
    </div>
  );
}

export default App;
