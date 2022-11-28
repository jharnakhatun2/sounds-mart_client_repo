import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../../Component/Divider/Divider';


const Blogs = () => {
    const {data: blogs = []} = useQuery({
        queryKey: ['blogs'],
        queryFn:async () =>{
            const res = await fetch(`https://sounds-mart-server-jharna203.vercel.app/blogs`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div className='m-4 p-5'>
                <h2 className='text-center mt-3 text-2xl font-semibold'>Our <span className='text-secondary'>Blogs</span> </h2>
                <Divider></Divider>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10 p-10'>
                {
                    blogs.map((blog) => {
                        const { _id, title, des } = blog
                        return <article className="card shadow-xl border-0" key={_id}>
                            <div className="card-body">
                                <h4 className="font-semibold text-xl font-serif text-neutral">{title}</h4>
                                <p className="py-3 text-accent ">{des.length < 400 ? des : des.slice(0, 400)}</p>
                                <Link to={`/blogs/${_id}`} className="cardFooter text-cyan-600 font-semibold">Learn More...</Link>
                            </div>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;