import "./feed.css"
import Share from '../../components/share/Share'
import Post from '../../components/Post/Post'

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
