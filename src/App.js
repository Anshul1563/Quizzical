import React from "react";

import Home from './components/Home';
import Setup from './components/Setup'
import Quiz from './components/Quiz'

export default function App() {
    const [page,setPage] = React.useState(0)
    const [data,setData] = React.useState([{
      category : "",
      questions : '',
      difficulty : '',
      questionArray : []
    }])

    function setup(data){
      setData({category : data[1].category, questions : data[1].questions, difficulty :data[1].difficulty, questionArray : data[0]})
      setTimeout(() => setPage(2),1000)
    }

    function handlePage(n)
    {
      setPage(n)
    }

    console.log(data)
    return (
      <div>
         {page === 0 && <Home changePage = {() => handlePage(1)}/>} 
         {page === 1 && <Setup setup ={setup} />}
         {page === 2 && <Quiz category = {data.category} questions ={data.questions} difficulty = {data.difficulty} data = {data.questionArray} changePage = {() => handlePage(1)} />}
      </div>
    )
  }