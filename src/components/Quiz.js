import React from "react";
import Question from './Question'

export default function Quiz(props){
    const dataArray = props.data
    const [questions,setQuestions] = React.useState(questionsInit())
    const [score,setScore] = React.useState(0)
    const [submitted,Setsubmitted] = React.useState(false)

    function questionsInit(){
        const questions = []
        let c = 0
        dataArray.map(q => {questions.push({
            Q : q.question,
            options : [q.correct_answer,...q.incorrect_answers],
            selected : "",
            correct : q.correct_answer,
            id : c++
            })
            return q
        })
        return questions
    }
    
    function handleClick(answer,id)
    {
        
        setQuestions(prevQuestions => prevQuestions.map(q =>{
            return q.id === id ? {...q,selected : answer} : q
        }))
    }

    function handleSubmit(){
        const count = questions.filter(q => q.correct === q.selected )
        setScore(count.length)
        Setsubmitted(true)
    }
    function handleRetake(){
        setQuestions(questionsInit())
        Setsubmitted(false)
    }
    function categorySelect(){
        const num = props.category
        let category = ""
        if (num == 12) category = 'Music'
        else if (num == 15) category = 'Video Games'
        else if (num == 31) category = 'Anime and Manga'
        else if (num == 10) category = 'Books'
        else if (num == 14) category = 'Television'
        else category = 'Any Category'
        return category 
    }

    const questionElements = questions.map( q => <Question question = {q} handleClick ={handleClick} key = {q.id} id = {q.id} reveal = {submitted} />)

    

    return (
        <div className="quiz w-screen h-screen p-10 flex flex-col ">
            <div className="font-jost mb-4 bg-slate-900 text-white p-4 flex justify-between">
                {!submitted &&<h1 className="text-6xl">Here are your questions!</h1>}
                { submitted &&<h1 className="text-6xl">Test Completed!</h1>}
                { submitted &&<button className="text-3xl mr-10 p-2 rounded-2xl self-center" style = {{background : 'rgb(157, 141, 241)'}} onClick ={props.changePage}>New Quiz</button>}
                <div className="flex items-center">
                    {submitted && <div className="text-3xl mr-10 text-green-500"> You got {score}/{props.questions} right</div>}
                    {!submitted &&<button className="text-3xl mr-10 p-2 rounded-2xl" style = {{background : 'rgb(157, 141, 241)'}} onClick ={handleSubmit}>End Quiz</button>}
                    { submitted &&<button className="text-3xl mr-10 p-2 rounded-2xl" style = {{background : 'rgb(157, 141, 241)'}} onClick ={handleRetake}>Retake Quiz</button>}
                    <div className="flex flex-col">
                        <h1>Number of questions : {props.questions}</h1>
                        <h1>Category : {categorySelect()}</h1>
                        <h1>Difficulty : {props.difficulty ? props.difficulty : "Any Difficulty"}</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-full rounded-xl bg-slate-900 overflow-auto">
                {questionElements}
            </div>
        </div>
    )
}