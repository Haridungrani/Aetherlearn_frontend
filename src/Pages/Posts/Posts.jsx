import React from 'react'
import s from './Posts.module.css'
import PostListStudent from './PostListStudent';


const Posts = () => {
    return (
        <>
                <div className={s.container}>
                    <div className={s.titleContainer} >
                        <h1 className={s.title}>Posts</h1>
                    </div>
                    <PostListStudent  />
                </div>
            </>
    )
}

export default Posts