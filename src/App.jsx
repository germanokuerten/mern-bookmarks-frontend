import { useState, useEffect } from 'react';
import './App.css';
import Body from './components/body';
import Form from './components/form';
import Header from './components/header';

function App() {
  const[bookmarks, setBookmarks] = useState(null)

  // url
  const url = 'https://buenas-noches-backend.herokuapp.com/'

  //
  
  // const getBookmarks = async () =>{
  //   const data = await fetch(url+'bookmark').then(res => res.json())
  //     console.log(data)
  // }

  async function getBookmarks(){
    //fetch database 
    // to get our bookmarks
    try {
      const data = await fetch(url+'bookmark').then(res => res.json())
      console.log(data)
      setBookmarks(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{getBookmarks()},[])

  return (
    <div className="App">
      <Header/>
      <Form/>
      <Body/>
    </div>
  );
}

export default App;
