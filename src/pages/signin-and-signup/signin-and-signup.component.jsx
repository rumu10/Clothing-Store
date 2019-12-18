import React from 'react';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/signup/signup.component';

import './signin-and-signup.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='signin-and-signup'>
        <SignIn/>
        <SignUp/>
    </div>

)
export default SignInAndSignUpPage;