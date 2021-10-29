

import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: 'My new website', body: 'lorem ipsum..', author: 'bane', id:1},
       {title: 'Washing the car', body: 'lorem ipsum..', author: 'luka', id:2},
       {title: 'Explore React library', body: 'lorem ipsum..', author: 'bane', id:3}
   ])

   const [name, setName] =useState('mario')
   // We can delete item with  setBlog() using id 
   const handleDelete = (id) => {
       const newBlog = blogs.filter(item => item.id !== id)
       setBlogs(newBlog)
}
    const handleClick = (e) => {
        console.log('hello Bane', blogs)
        
    }

useEffect( () => {
    console.log('use effect')
},[])
    return (  
        <div className="home">
           <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
           <BlogList blogs = {blogs.filter( (item) => item.author === 'luka')} title="One new Chapter" handleDelete={handleDelete}/>
           <button onClick={() => setName('luigi')}>Change name</button>
           <p>{name}</p>
        </div>
    );
}
 
export default Home;