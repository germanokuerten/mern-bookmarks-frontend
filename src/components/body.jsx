import { Link } from "react-router-dom"
import { useState } from "react"
import Update from "./update"


export default function Body({bookmarks, handleDelete, handleUpdate}){
    const [updated, setUpdate] = useState({
        title:"",
        url: ""
    })


    return(
        <div className="bookmark-container">
            {bookmarks?.map(bookmark=>{
                return(
                    <div className="bookmark-card">
                        <a href={bookmark.url}>
                        <h4>{bookmark.title}</h4>
                        </a>
                        <Update 
                            handleUpdate={handleUpdate}
                            title={bookmark.title}
                            url ={bookmark.url}
                        />
                        <br />
                        <br />

                        <button onClick={()=>handleUpdate()}>Edit</button>
                        <button onClick={()=>handleDelete(bookmark._id)}>x</button>    
                    </div>
                )
            })
            }
            

        </div>
    )
}