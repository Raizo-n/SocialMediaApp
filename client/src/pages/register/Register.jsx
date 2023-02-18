import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CICCC App</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium delectus ea omnis, molestiae cumque itaque illo repellat
            pariatur ut officia numquam, maxime nemo corrupti
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
