import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from './body'
import Form from './form'
import Show from '../pages/show'

export default function Main(){
    const[bookmarks, setBookmarks] = useState(null)
    const url = 'https://buenas-noches-backend.herokuapp.com/'

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
    
      async function handleDelete(id){
        try {
          await fetch(url+"bookmark/"+id,{
            method:"DELETE",
          })
          getBookmarks()
        } catch (error) {
          console.log(error)
        }
      }
    
      async function handleUpdate(bookmark,id){
    
        try {
          await fetch(url+"bookmark/"+id,{
            method: 'PUT',
            headers:{
              'Content-Type':'Application/json'
            },
            body: JSON.stringify(bookmark)
          })
          getBookmarks()
          
        } catch (error) {
          console.log(error)
        }
      }
    
    
      useEffect(()=>{getBookmarks()},[])

    return(
        <>

        <Routes>
          <Route path='/' element={
          <>
            <Form createBookmark={createBookmark}/>
            <Body 
              bookmarks={bookmarks}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </>}/>
          <Route path='/bookmark/:id' element={<Show 
              bookmarks={bookmarks}
              handleUpdate={handleUpdate}
          />}/>
        </Routes>
        
        </>
    )
}