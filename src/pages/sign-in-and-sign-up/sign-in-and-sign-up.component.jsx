import React from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <div>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUp;