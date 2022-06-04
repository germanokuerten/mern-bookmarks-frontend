import { Link } from "react-router-dom"

export default function Body({bookmarks}){
    return(
        <div className="bookmark-container">
            {bookmarks?.map(bookmark=>{
                return(
                    <div className="bookmark-card">
                        <a href={bookmark.url}>
                        <h4>{bookmark.title}</h4>
                        </a>
                        
                    </div>
                )
            })

            }

        </div>
    )
}