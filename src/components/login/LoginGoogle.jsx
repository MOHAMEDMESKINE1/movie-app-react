import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function LoginGoogle({ onLogin }) {

    const [user, setUser] = useState(null);

    const handleLoginSuccess = (credentialResponse)=>{
      
            const credentialDecoded = jwtDecode(credentialResponse.credential)
            setUser(credentialDecoded)
            onLogin(credentialDecoded);
    }
    const LoginFailed = () =>{
      
            console.log('Login Failed');
          
    }
  return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={LoginFailed}
        />
    );
}

export default LoginGoogle;