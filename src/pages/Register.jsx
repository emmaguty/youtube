import React from 'react';
import Add from '../images/add_images.png';

const Register = () => {
    return(
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>GART TUBE</span>
                <span className='title'>Ingresa a Gart Tube</span>

                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display:"none"}} type="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="Agregar imagen" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;