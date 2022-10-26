import React, {useState,useEffect,Components} from 'react';

const ChangeTitle=()=> {
    useEffect(() => {
      document.title = 'Login';
    });
  }

const Login=()=>{
    ChangeTitle();
    return(
        <div>
            <h1>This Functionality will be Added Soon</h1>
        </div>
    )
}
export default Login;