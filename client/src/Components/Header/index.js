import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import {UserContext} from '../../App'
import { isAuth , signOut } from "../Auth";
import M from 'materialize-css'
const Header = () => {
    const {state,dispatch} = useContext(UserContext)

    const navigate = useNavigate()
   
    const renderList = () => {
        if(state) {
            return (
                <div className={styles.headerButton}>                 
                    <button className="btn btn-info"  onClick={() => {
                        localStorage.clear()
                        dispatch({type: "CLEAR"})
                        navigate('/signin')
                    }} >sign Out</button>   
                </div> 
            )
        }
        else {
            return (
                <div className={styles.headerButton}>
                    <Link to="/signup">                  
                        <button className="btn btn-secondary">Sign up</button>   
                    </Link>
                    <Link to="/signin ">
                        <button className="btn btn-secondary ml-4 mr-4">Sign In</button>
                    </Link>
                </div>
            )
        }
    }

    return (
        
        <header className={`container ${styles.header}`}>
            <Link to="/">
                <div className={styles.headerLogo}>
                    <img alt="" src="./icons/logo.png"></img>
                </div>
            </Link>
            <div className={styles.headerSearch}>
                <img alt="" src="./icons/search.png"></img>
                <input type="text" name="search" placeholder="search"></input>
            </div>         
            {renderList()}
        </header >
    );
};

export default Header;
