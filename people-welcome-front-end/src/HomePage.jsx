import { useState } from 'react'
import { BsJournalCheck } from 'react-icons/bs'
import LeftBar from './LeftBar'
import Post from './Post'

function HomePage() {
    const [postData, setPostData] = useState([{ user: 'friendly.henry', postId: '123456789'}, {user: 'john.pork', postId: '234567890'}])

    return(
        <div className='homepage'>
            <LeftBar/>
            <div className='postlist'>
                <ul>
                    {postData.map((post) => {
                        return (
                            <li key={post.postId}>
                                <Post value={post.user}></Post>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomePage