import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';


const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loading></Loading> //when go private route loading is continue
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoutes;