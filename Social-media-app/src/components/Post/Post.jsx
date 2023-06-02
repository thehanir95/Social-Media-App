import './post.css'
import { MoreVert } from  '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpg" alt="" className='postProImg' />
                    <span className='postUserName'>The Sam</span>
                    <span className='postDate'>5 min age</span>
                </div>
                <div className="postTopRight">
                <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hi, this is My first post</span>
                <img src="/assets/post/1.png" alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                    <span className='postLikeCounter'>32 people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
