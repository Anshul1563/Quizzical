import React from "react";

export default function Setup(props) {

    const [count,setCount] = React.useState(0)
    const [load,setLoad] = React.useState(0)
    const [formData, setFormData] = React.useState({
    questions: "",
    category: "",
    difficulty: "",
    });

    React.useEffect(()=>{
        async function getQuestions(){
        const res = await fetch(`https://opentdb.com/api.php?amount=${formData.questions}&category=${formData.category}&difficulty=${formData.difficulty}`)
        console.log("Fetching...")
        if (res.ok){
            console.log("Fetch successful")
            const data = await res.json()
            if (data.results.length > 0) {
                setLoad(2)
                props.setup([data.results,formData])
            }
        }
        else {
            console.log("Fetch failed")
        }
        }
        getQuestions()
    },[count])

    function handleChange(event) {
        const { name, value} = event.target;
        setFormData((prevForm) => {
        return { ...prevForm, [name]: value };
        });
        }

    function handleSubmit(event){
        event.preventDefault()
        if (formData.questions > 0 && formData.questions <= 50) {
            setCount(count + 1)
            setLoad(1)
        }
    }

    return (
        <div className="setup h-screen items-center p-8">
            <div className="rounded-xl bg-slate-100/40  text-black p-5 flex flex-col items-center justify-start h-full">
                <div className="flex items-baseline w-full justify-between">
                <button className="text-3xl px-3 rounded-2xl mr-20" style = {{background : 'rgb(157, 141, 241)',visibility :'hidden'}} >Home</button>
                    <h1 className="text-center font-jost text-5xl font-medium  py-2 pb-5 w-full">Setup your questions!</h1>
                    <button className="text-3xl px-3 py-2 rounded-md mr-20 font-jost bg-slate-800 text-green-400" onClick ={props.changePage}>Home</button>
                </div>
                <form className="flex flex-col p-4 w-full pl-[34rem] rounded border-4 border-white" onSubmit={handleSubmit}>
                    <h1 className="font-jost text-3xl font-medium mb-2">Enter Number of questions</h1>
                    <div className="flex items-center">
                    <input
                        type="number"
                        placeholder="Enter a number..."
                        onChange={handleChange}
                        name="questions"
                        value={formData.questions}
                        className = 'rounded-lg w-48'
                    />
                    {(formData.questions <=0  || formData.questions >50) && <h1 className="text-xl font-jost text-red-700 ml-10 rounded bg-slate-100 px-2 flex items-center py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        Enter a number between 1-50 </h1>}
                    </div>
                    <h1 className="font-jost text-3xl font-medium my-2">Select your category</h1>
                    <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        name="category"
                        className = 'rounded-lg w-48'
                    >
                        <option value="">Any Category</option>
                        <option value ="12">Music</option>
                        <option value="15">Video Games</option>
                        <option value="31">Anime and Manga</option>
                        <option value="10">Books</option>
                        <option value="14">Television</option>
                    </select>
                    <h1 className="font-jost text-3xl font-medium my-2">Select your difficulty</h1>
                    <select
                        id="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                        name="difficulty"
                        className = 'rounded-lg w-48'
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button className="flex items-center font-jost text-3xl font-medium text-start mt-10 text-green-400 rounded-xl bg-slate-800 w-fit px-4 py-2 transition duration-150 hover:ring-4 hover:ring-green-700" >
                        Submit
                        {load == 1 && <div role="status" className="flex items-center">
                            <svg className="ml-3 inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {load ==2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    </button>
                    
                </form>
            </div>
        </div>
    );
}
