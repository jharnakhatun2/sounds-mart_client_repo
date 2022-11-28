import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);

  const handleSignout =()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log);
  }
    return (
        <div>
           <p className="text-red-600">Something went wrong !!!</p> 
           <p className="text-red-400">{error.statusText || error.message}</p>
           <p className="text-3xl">Please <button onClick={handleSignout}>Sign Out</button> and log back in</p>


        </div>
    );
};

export default DisplayError;