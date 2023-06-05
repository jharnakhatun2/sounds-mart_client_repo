import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blog = useLoaderData();
    return (
        <div className="px-10 lg:px-20 pt-28 pb-5">
        <h1 className="text-2xl font-semibold mb-5">{blog.title}</h1>
        <p className="text-justify">{blog.des}</p>  
        </div>
    );
};

export default Blog;