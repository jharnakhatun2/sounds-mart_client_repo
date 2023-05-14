import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import useBuyer from '../Hooks/useBuyer';
import Loading from '../Shared/Loading/Loading';


const BuyerRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isBuyer,isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if(loading || isBuyerLoading){
        return <Loading></Loading> //when go private route loading is continue
    }
    if(user && isBuyer){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default BuyerRoutes;