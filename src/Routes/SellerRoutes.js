import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import useSeller from '../hooks/useSeller';
import Loading from '../Shared/Loading/Loading';


const SellerRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if(loading || isSellerLoading){
        return <Loading></Loading> //when go private route loading is continue
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRoutes;