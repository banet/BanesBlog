

import {useState} from 'react'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: 'My new website', body: 'lorem ipsum..', author: 'bane', id:1},
       {title: 'Washing the car', body: 'lorem ipsum..', author: 'bane', id:2},
       {title: 'Explore React library', body: 'lorem ipsum..', author: 'bane', id:3}
   ])

    const handleClick = (e) => {
        console.log('hello Bane')
    }

   
    return (  
        <div className="home">
            {blogs.map(function(blog){
                return(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Home;