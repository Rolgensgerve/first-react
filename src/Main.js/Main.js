import React from "react"
import Article from "./Article"
import './Main.css'
import Article2 from "./Article2"
import Article3 from "./Article3"
export default function Main (){
    return(
        <main className="content">
            <Article />
            <Article2 />
            <Article3 />
        </main>
    )
}