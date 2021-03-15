
import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {TagRow} from './'



export default function PostGrid ({posts}){

    const [pgSize, setPgSize] = useState(9)

    const [curr, setCurr] = useState(1)

    const paginationPosts = useMemo(() =>
    {
        const lastIdx = curr * pgSize
        const firstIdx = lastIdx - pgSize


        return posts.slice(firstIdx, lastIdx)
    }, [curr, pgSize, posts])
    //scrolls up for better look for user when next button clicked 
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [curr, pgSize])



    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {paginationPosts.map((post, index) => (
                    <div className="post-container">
                        <figure>
                            <Link to={`/post/${post?.id}`}>
                                <img src={require(`../../assets/images/${post.image}`).default} alt={post.image}/>
                            </Link>
                        </figure>
                        <TagRow tags={post.categories} />
                        <h2>{post.title}</h2>
                        <p className="author-text">
                            <span>
                                By:
                                <Link to={`/authors/${post.author}`} >
                                    {post.author}
                                    <br/>
                                </Link>
                            </span>
                            <span>
                                 {post.date}
                            </span>
                        </p>
                        <p className="description-text">
                            {post.description}
                        </p>
                        <Link to={post.link}> Please Read More...</Link>
                    </div>
                ))}
            </section>
            <Pagination
                simple showSizeChanger
                onShowSizeChange={setPgSize} pgSize={pgSize}
                total={posts.length} defaultCurr={curr}
                onChange={setCurr}
            />
        </section>
    )
}

