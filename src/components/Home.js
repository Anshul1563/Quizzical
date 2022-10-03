import React from "react";

export default function Home(props)
{
    const styles = {
        color : '#272727'
    }
    return ( 
        <div className="home w-screen h-screen flex flex-col items-center justify-center" >
            <h1 className="font-jost text-5xl font-medium text-green-400 mb-5"> Quizzical</h1>
            <h1 className="font-jost text-4xl mb-5"> A simple trivia quiz you can take in 5 minutes.</h1>
            <button className="rounded-xl bg-red-300 font-jost text-4xl p-3 px-10 font-medium" style={styles} onClick = {props.changePage}>Begin Now</button>
        </div>
    )
} 