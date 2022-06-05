import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function Show({bookmarks,handleUpdate}){
    
    const { id } = useParams()
    const bookmark = bookmarks?.find(bookmark=> bookmark._id === id)
    
    
    const navigate = useNavigate()
    
    const [editBookmark, setEditBookmark] = useState(bookmark)
    console.log(editBookmark)

    const handleChange=(event)=>{
        setEditBookmark({
            ...editBookmark,
            [event.target.name]:event.target.value
        })
    }   
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        handleUpdate(editBookmark,id)
        navigate('/')
    }



    return(
        <div className="edit-container">
           
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={editBookmark.title}
                placeholder="Website"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="url"
                value={editBookmark.url}
                placeholder="http://"
                onChange={handleChange}
            />
            <button type="submit"> update!</button>

            </form>

        </div>
    )
}