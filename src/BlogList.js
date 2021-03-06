

function BlogList ({title, blogs}) {

    // const blogs = props.blogs
    // const title = props.title
    
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
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
    )
}

export default BlogList

