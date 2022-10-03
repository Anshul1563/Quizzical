import React from "react";
import {decode} from 'html-entities';

export default function Question(props){
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const [options,setOptions] = React.useState(() =>shuffle(props.question.options))
    function selectStyle(n){
        let style1 = {}
        if (options[n] === props.question.selected){ 
            style1 = {background : 'rgb(157, 141, 241)'}
        }
        if (props.reveal){
            if (options[n] === props.question.selected && options[n] !== props.question.correct){
                style1 = {background : '#FF3333',border : 'none'}
            }
            if (options[n] === props.question.correct && props.question.selected){
                style1 = {background : 'rgb(22 163 74)',border : 'none'}
            }
            if (options[n] === props.question.correct && !props.question.selected){
                style1 = {background : 'blue',border : 'none'}
            }
        }
        return style1
    }
    
    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }

    return (
        <div className="px-5 flex flex-col border-b-4 border-white"> 
            <h1 className="my-4 font-sans text-3xl text-slate-300">{decode(props.question.Q)}</h1>
            <div className="flex gap-20 font-jost text-3xl mb-6"> 
                <button 
                    id = '1'
                    disabled = {props.reveal ? "disabled":""} 
                    value = {options[0]} 
                    style ={selectStyle(0)} 
                    className="border-2 border-green-500 rounded-2xl px-3 py-1 text-slate-200" 
                    onClick={() => props.handleClick(options[0],props.id)}> {decode(options[0])} </button>
                <button 
                    id = '2'
                    disabled = {props.reveal ? "disabled":""}   
                    value = {options[1]} 
                    style ={selectStyle(1)} 
                    className="border-2 border-green-500 rounded-2xl px-3 py-1 text-slate-200" 
                    onClick={() => props.handleClick(options[1],props.id)}> {decode(options[1])} </button>
                {options[2] && <button 
                    id = '3'
                    disabled = {props.reveal ? "disabled":""}   
                    value = {options[2]} 
                    style ={selectStyle(2)} 
                    className="border-2 border-green-500 rounded-2xl px-3 py-1 text-slate-200 " 
                    onClick={() => props.handleClick(options[2],props.id)}> {decode(options[2])} </button>}
                {options[3] && <button 
                    id = '4'
                    disabled = {props.reveal ? "disabled":""}   
                    value = {options[3]} 
                    style ={selectStyle(3)} 
                    className="border-2 border-green-500 rounded-2xl px-3 py-1 text-slate-200" 
                    onClick={() => props.handleClick(options[3],props.id)}> {decode(options[3])} </button>}
                    
            </div>
        </div>
    )
}