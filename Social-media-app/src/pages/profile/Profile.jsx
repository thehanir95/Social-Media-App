import './profile.css'
import Topbar from "../../components/topBar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
            <Topbar/>
            <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profile-cover">
                    <img src="assets/6.jpg" className='profileCoverImg' alt="" />
                    <img src="assets/person/3.jpg" className='profileUserImg' alt="" />
                    </div>
                </div>
                <div className="profileInfo">
                    <h4 className='profieInfoName'>TheSam</h4>
                    <span className='profieInfoDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In assumenda eaque sunt eos vo</span>
                </div>
                <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
                </div>
            </div>
            </div>
        </>
  )
}
