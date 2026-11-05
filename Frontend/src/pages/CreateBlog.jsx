import axios from 'axios'
import React, { useState } from 'react'

function CreateBlog() {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    async function sendBlog(e) {
        e.preventDefault()
        let d = await axios.post("http://localhost:8000/createblog", { author, title, content, image, category })
        console.log(d)
    }
    return (
        <div>CreateBlog

            <form action="" onSubmit={sendBlog}>


                <div className="">
                    <label htmlFor="">Author</label>
                    <input onChange={(e) => setAuthor(e.target.value)} type="text" />
                </div>
                <div><label htmlFor="">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" />
                </div>
                <div><label htmlFor="">Content</label>
                    <input onChange={(e) => setContent(e.target.value)} type="text" />
                </div>
                <div><label htmlFor="">Image</label>
                    <input onChange={(e) => setImage(e.target.value)} type="text" />
                </div>
                <div><label htmlFor="">Category</label>
                    <input onChange={(e) => setCategory(e.target.value)} type="text" />
                </div>
                <button>Create Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog