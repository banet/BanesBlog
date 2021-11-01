

import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState(null)

   const [name, setName] =useState('mario')
   // We can delete item with  setBlog() using id 
   const handleDelete = (id) => {
       const newBlog = blogs.filter(item => item.id !== id)
       setBlogs(newBlog)
}


useEffect( () => {
    // Fetch data from JSON server using endpoints url"http://localhost:8000/blogs"
    fetch('http://localhost:8000/blogs')
    // Waiting for promise "data"
        .then(res => {
            return res.json()
        })
        // ..then  we fired function when over promise is complete! 
        .then( data => {
            console.log(data)
            // Update data with useState function setName
            setBlogs(data)
        })
},[])

    return (  
        <div className="home">
           {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>}
           {blogs && <BlogList blogs = {blogs.filter( (item) => item.author === 'luka')} title="One new Chapter" />}
           <button onClick={() => setName('luigi')}>Change name</button>
           <p>{name}</p>
        </div>
    );
}
 
export default Home;