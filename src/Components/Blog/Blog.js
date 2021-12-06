import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4a265d2ffd174f53bb00cefaba8f509d')
            .then(res => res.json())
            .then(data => setBlog(data.articles));
    }, [])


    console.log(blog);
    return (
        <div className="blog_page">
            <div className="container">
                <div className="blog_content_item">
                    {
                        blog.map(blog =>
                            <div className="blog_content">
                                <img src={blog.urlToImage} alt={blog.title} />
                                <div className="blog">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.content}</p>
                                    <p>{blog.source.name}</p>
                                    <h3>Authore: {blog.author}</h3>
                                    <span>Publish Date: {blog.publishedAt}</span>
                                    <a href={blog.url} target="_blank">See More</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;