import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import { auth, provider } from "../../firebase"
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1920px-Facebook_f_logo_%282021%29.svg.png'
                    alt=''
                />
                <img className='login__logoTitle'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2880px-Facebook_Logo_%282019%29.svg.png'
                    alt=''
                />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login