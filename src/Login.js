import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import Fbimg from "./Images/Facebook-logo.png";
import Fbname from "./Images/Facebookname.jpg";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvide';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=(e)=>{
        //sign in popup
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        })
        .catch(error=>{
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img  
                 src={Fbimg}
                />
                  <img  
                 src={Fbname}
                />
                
            </div>
            <Button type="submit" onClick={signIn} >
              Sign In
            </Button>
        </div>
    )
}

export default Login;

