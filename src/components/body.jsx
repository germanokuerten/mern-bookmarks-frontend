

import { Link } from "react-router-dom"


export default function Body({bookmarks, handleDelete, handleUpdate}){
    // const [updated, setUpdate] = useState({
    //     title:"",
    //     url: ""
    // })


    return(
        <div className="bookmark-container">
            {bookmarks?.map(bookmark=>{
                return(
                    <div className="bookmark-card">
                        <a href={bookmark.url}>
                        <h4>{bookmark.title}</h4>
                        </a>


                        <Link to={`/bookmark/${bookmark._id}`}>
                        <button>Edit</button>
                        </Link>
                        <button onClick={()=>handleDelete(bookmark._id)}>x</button>    
                    </div>
                )
            })
            }
            

        </div>
    )
}