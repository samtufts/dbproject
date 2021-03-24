import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './utils/refreshToken';

const clientId = '523316769207-lchoooe18tfv5p2ece8fdns1seld9tqo.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('Login Successful. CurrentUser:', res.profileObj);
        alert(
            `Welcome ${res.profileObj.name}.`
        );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Login failed.`
        );
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;