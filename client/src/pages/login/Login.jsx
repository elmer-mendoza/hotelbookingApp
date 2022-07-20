import "./login.css"
import { faUser,faLock,faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import axios from "axios"
import useFetch from "../../components/hooks/useFetch"
import Cookie from "js-cookie"

function Login() {

  const sub = async()=> {
    Cookie.set("mendoza","pogi")
 
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login",{
        "username":"elmer mendoza",
        "password":"Nov14151"
    },{withCredentials: true});
      console.log("heyyyy"+(res.data))
    } catch (err) {
      console.log(err);
    }
  }
  const sub1 = async()=> {
    try {
      const res = await axios.get("http://localhost:8080/api/users",{withCredentials: true});
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  }
  
 

  return (
    <div className='login'>
      <div className="login__container">
        <h1>Login</h1>
        <div className="login__username">
          <label htmlFor="name" ><FontAwesomeIcon icon={faUser} className="login__icon"/>username</label>
          <input type="text"   name="name" required/>
        </div>
        <div className="login__password">
          <label htmlFor="password"><FontAwesomeIcon icon={faLock} className="login__icon"/>password</label>
          <input type="password" name="password" required/>
        </div>
        <div className="login__email">
          <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} className="login__icon"/>email</label>
          <input type="email"  name="email" required/>
        </div>
        <button onClick={sub}>Submit</button>
        <button onClick={sub1}>Submit</button>
      </div>
    </div>
  )
}

export default Login