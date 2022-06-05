import { useState } from "react"

export default function Update({handleUpdate, title, url}){
    const [bookmark, setBookmark] = useState({
        title: "",
        url: ""
    })

    const handleChange = () =>{

    }

    const handleSubmit = () =>{

    }

    return(
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="title"
            value={bookmark.title}
            placeholder={title}
            onChange={handleChange}
        />
        <input 
            type="text"
            name="url"
            value={bookmark.url}
            placeholder={url}
            onChange={handleChange}
        />
        <button type="submit"> update</button>

    </form>
    )


}