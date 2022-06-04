import { useState } from "react"


export default function Form(){
    const [form, setForm] = useState({
        title: "",
        url: ""
    })
    
    

    function handleChange(event){
        const updatedForm = {
            ...form,
            [event.target.name]: event.target.value
        }
        console.log(updatedForm)
        setForm(updatedForm)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('button')

    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={form.title}
                placeholder="Website"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="url"
                value={form.url}
                placeholder="http://"
                onChange={handleChange}
            />
            <button type="submit"> add!</button>

        </form>
    )
}