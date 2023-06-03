import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">TheSam</h3>
                <span className="loginDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi veritatis cupiditate? Impedit sint a delectus perferend
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="User Name" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className='loginBtn'>Sign up</button>
                    <button className="loginRegBtn">Log in Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
