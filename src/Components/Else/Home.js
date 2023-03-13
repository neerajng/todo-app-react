import React from "react";
import Child from "./Child";
import homeCss from "./Home.module.css"
import btnCss from "./Button.module.css"
const Home = () => {
    return(
        <div className={homeCss.header}>
        <h1>Home Component</h1>
        <Child/>
        <button className={btnCss.loginBtn} type="">Log in</button>
        <button className={btnCss.logoutBtn} type="">Log out</button>
        </div>
    )
};

export default Home;