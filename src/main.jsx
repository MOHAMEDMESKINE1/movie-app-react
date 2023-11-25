import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserContext from './context/userContext.js';

const clientId = '562009833103-t2laag4ldde8q46eo4f9k0t2o8eci5ni.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
        <App />            
    </GoogleOAuthProvider>
  </React.StrictMode>
)
