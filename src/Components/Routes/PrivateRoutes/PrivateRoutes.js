import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvider';
import { RotatingLines } from 'react-loader-spinner'

const PrivateRoutes = ({children}) => {
    const location = useLocation();    
    const {user, loading} = useContext(AuthContex);

    if(loading){
        return <div className='flex justify-center'><RotatingLines  strokeColor="grey" strokeWidth="5" animationDuration="0.75"  width="96" visible={true} /></div>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;