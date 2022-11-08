import { BsPersonCircle } from 'react-icons/bs'

function Post(props) {
    const data = props.value
    return(
        <div className='post'>
            <div className="bar">
                <div className="pfp">
                    <BsPersonCircle/>
                </div>
                <h2 className='user'>{data}</h2>
            </div>
            <div className="photo"></div>
        </div>
    )
}

export default Post