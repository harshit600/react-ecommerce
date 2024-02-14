import React from 'react'
import { useSelector } from 'react-redux'
import {loggedInUser} from './authslice/authenslice';
import { Navigate } from 'react-router-dom';
export const Protected = ({children}) => {
    const user = useSelector(loggedInUser);
    console.log(user);
    if(user){
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
}
