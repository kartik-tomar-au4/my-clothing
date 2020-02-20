import React from 'react';
import './sign-in.style.scss';

import { signInWithGoogle } from '../../../src/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    } 

    handelChange = event => {
        const { value, name } = event.target
        
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an Account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handelChange} label='Email' />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handelChange} label='Password'/>
                    <div className='buttons'>
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }  
}

export default SignIn;