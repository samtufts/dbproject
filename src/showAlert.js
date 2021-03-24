import React, { useState } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab/';
import Snackbar from '@material-ui/core/Snackbar';
import "./showAlert.css"

const ShowAlert = ({ dog, state, setter }) => {
// {dog} as a destructured parameter is the value stored in 'dog = {"hello"}', so it's "hello"
    if (state.show === true) {
        return (
            <div>
                {/* to include a Close button, add to alert: onClose={() => setter(false)} */}
                <Alert className="alert" severity={state.type} variant="filled"> 
                    <AlertTitle> {state.type == "success" ? "Success" : "Error"}</AlertTitle>
                    {state.message}
                </Alert>
            </div>
        );
    } else {
        return (
            <></>
        )
    }
    
}

export default ShowAlert