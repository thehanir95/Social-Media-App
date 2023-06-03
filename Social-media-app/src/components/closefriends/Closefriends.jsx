import './closefriends.css'

export default function Closefriends({user}) {
  return (
    <div>
        <li className="sidebarFriend">
            <img src={user.profilePic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </div>
  )
}
