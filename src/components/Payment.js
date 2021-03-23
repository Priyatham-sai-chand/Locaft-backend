import React,{ useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import UserContext from '../context/UserContext'


const Payment = (props) => {
  const { userData, setUserData } = useContext(UserContext);


    return (
        <div>

            <h1>{userData.user.username}</h1>
            <h2>{props.pricing}</h2>
            
        </div>

    );
}
export default Payment;
