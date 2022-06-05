import { useState } from "react"


export default function Form({createBookmark}){
    const [bookmark, setBookmark] = useState({
        title: "",
        url: ""
    })
    
    

    function handleChange(event){
        const updatedForm = {
            ...bookmark,
            [event.target.name]: event.target.value
        }
        console.log(updatedForm)
        setBookmark(updatedForm)

    }

    function handleSubmit(event){
        event.preventDefault()
        createBookmark(bookmark)
        setBookmark({
            title:"",
            url:""
        })
    }


    return(
        <>
        <h5>create bookmark</h5>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={bookmark.title}
                placeholder="Website"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="url"
                value={bookmark.url}
                placeholder="http://"
                onChange={handleChange}
            />
            <button type="submit"> add!</button>

        </form>
        </>
    )
}