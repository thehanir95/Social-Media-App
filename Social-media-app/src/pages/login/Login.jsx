import './login.css'

export default function Login() {
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
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className='loginBtn'>Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegBtn">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
