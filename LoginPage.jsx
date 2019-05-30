import './loginPage.css'
import React from 'react'

export default function LoginPage(props) {
    return (
        <div className="wrapper fadeInDown" id="loginPage">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="<img URL>" id="icon" alt="User Icon" />
                </div>

                <form id="loginForm" method="post">
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In"
                        onClick={e => {
                            e.preventDefault()
                            // the function to call as an eventHandler to validate data on the db
                            // and then redirect
                        }}
                    />
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="">Forgot password?</a>
                </div>

            </div>
        </div>
    )
}