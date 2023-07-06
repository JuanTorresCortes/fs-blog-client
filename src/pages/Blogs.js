import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Blogs = () => {
    const { blogs } = useOutletContext()
    console.log(blogs)
    const {data} = blogs
  return (
    <div>
        Blogs
        {blogs.success && (
            <div>
                {data.map((blog) => {
                  return <p>blog.title</p>
                })}
            </div>
        )}
        {/* <p>{jsonResponse.message}</p> */}
    </div>
  )
}

export default Blogs