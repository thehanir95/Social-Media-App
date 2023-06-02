import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Poster</b> and <b>3 other Friends</b> have a birthday today.</span>
        </div>
      </div>
    </div>
  )
}
