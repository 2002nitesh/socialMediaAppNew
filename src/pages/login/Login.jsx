import React from 'react';
import './login.scss'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, amet dignissimos quod fugit temporibus dolores dicta magni natus, accusamus, at placeat. Animi laudantium eius excepturi.
                </p>
                <span>Don't you have an account?</span>
                <Link to='/login'>
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                  <input type="text" placeholder='Username' />
                  <input type="password" placeholder='Password'/>
                  <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login