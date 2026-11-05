import React from 'react'
import { blogs } from '../assets/data'

function Blogs() {
    return (
        <div className='container'>

          
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <h1>{blog.author}</h1>
                            <img src={blog.image} alt="" />
                            <p>{blog.category}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs