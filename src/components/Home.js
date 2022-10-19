import React from "react";
import bg from '../images/Quiz bg.jpg'

export default function Home(props)
{
    
    return ( 
        <div className="h-screen w-screen bg-[#050E26] flex flex-col justify-between">
            <div className="flex ">
                <div className="bg-quiz bg-no-repeat w-[56rem]" >
                </div>
                <div className="home flex flex-col justify-start items-start p-10 px-14 bg-[#EEC643]" >
                    <h1 className="text-6xl font-bold text-[#050E26] mb-8 ">Welcome to <span className="text-[#D7263D]">Quizzical!</span></h1>
                    <h1 className="font-jost text-5xl ml-4 mb-8 text-[#050E26]"> A trivia quiz you can take in 5 minutes!</h1>
                    <button className="rounded-xl bg-[#050E26] text-[#e6fafc] font-jost text-4xl p-3 px-10 font-medium" onClick = {props.changePage}>Begin Now</button>
                </div>
            </div>
            <div className="flex justify-between m-5">
                <h1 className="font-inter text-xl bg-[#EEC643] p-5 rounded-sm">A React application created by Anshul Dasyam.</h1>
                <h1 className="font-inter text-xl bg-[#EEC643] p-5 rounded-sm">Api used can be found <a href='https://opentdb.com/' className="font-bold text-[#DA4167]" target= '_blank'>here</a></h1>
            </div>
        </div>
    )
} 