import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress> //when go private route loading is continue
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;