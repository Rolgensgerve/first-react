import React from "react";
import CoMponente1 from "../Header.js/Prueba1";
import './Body.css'
import Main from "../Main.js/Main";
import Sidebar from "../Aside.js/Aside";
import Post from "../post.js/post";
import Foot from "../Footer.js/Footter";


export default function Body (){

    return(
        <div className="container">
            
            <header className='header'>
            Cristian
        </header>  
            <Main />
            <Sidebar />
            <Post />
            <Foot />
            

        </div>
    )
}