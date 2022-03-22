import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section
        className="form"
        onSubmit={onSubmit}
      >
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id='email'
              value={email}
              name='email'
              onChange={onChange}
              placeHolder='Enter your Email'
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password'
              value={password}
              name='password'
              onChange={onChange}
              placeHolder='Enter your Password'
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
};

export default Login;