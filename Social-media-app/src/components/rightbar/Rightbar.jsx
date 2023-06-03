import "./rightbar.css"
import Online from '../../components/online/Online'
import { Users } from '../../dummyData'

export default function Rightbar({profile}) {
  const HomeRightBar = ()=> {
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Poster</b> and <b>3 other Friends</b> have a birthday today.</span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
           <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">UK</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">USA</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Test 01</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Test 02</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Test 03</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Test 04</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
