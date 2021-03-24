import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId ='523316769207-lchoooe18tfv5p2ece8fdns1seld9tqo.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        console.log('Logout successful');
        alert('Logout successful');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;