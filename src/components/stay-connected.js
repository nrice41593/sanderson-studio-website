import React from "react";

export default function StayConnected () {
    return(
        <form>
            <div className="container">
                <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
            
                <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
            
                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>
            <div className="container">
                <span>
                    <a href="#">Forgot Password?</a>
                </span>
            </div>
        </form> 
    )
}