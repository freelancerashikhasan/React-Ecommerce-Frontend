import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function Login() {
    const { login } = useContext(AuthContext);
    const [authToken, setAuthToken] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    let [input, setInput] = useState({
        email: '',
        password: ''
    });
    function changeinput(e) {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        console.log(name);
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    async function submitForm(e) {
        e.preventDefault();
        try {
            await login(input);
            // Redirect or update UI as needed
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
             <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mr-10">
                            <div className="login-form">
                                <div className="section-title">
                                    <h2>Login</h2>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form  onSubmit={submitForm}>
                                            <div className="form">
                                                <input type="text" className="form-control" id="username"  onChange={changeinput} name='email' 
                                                    placeholder="Username or email address*" required />
                                            </div>
                                            <div className="form">

                                                <div className="password-input">
                                                    <input type="password" className="form-control" id="password"  onChange={changeinput}
                                                        placeholder="Password*" name='password' required />
                                                    <span className="show-password-input"></span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <input type="checkbox" className="form-check-input" id="remember" />
                                                <label  className="form-label">Remember Me</label>
                                            </div>
                                            <div className="form">
                                                <button type="submit" className="btn">Login</button>
                                            </div>
                                            <a className="forgot-password" href="#">Lost your password?</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 ml-10">
                            <div className="register-form">
                                <div className="section-title">
                                    <h2>Registration</h2>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div className="form">
                                                <input type="text" className="form-control" id="username"
                                                    placeholder="Username or email address*" required />
                                            </div>
                                            <div className="form">

                                                <input type="email" className="form-control" id="username"
                                                    placeholder="Email address*" required />
                                            </div>
                                            <div className="form">
                                                <div className="password-input">
                                                    <input type="password" className="form-control" id="password"
                                                        placeholder="Password*" required />
                                                    <span className="show-password-input"></span>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <button type="submit" className="btn">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
