import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChanged = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };
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
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChanged}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChanged}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChanged}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChanged}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
