import axios from 'axios'
import React,{useState,useEffect} from 'react'
import nodeJsQuestions from '../data/data'
import './NodeQuestions.css'




function NodeQuestions() {
  // const id = localStorage.getItem(id)
  // console.log(id); 
  const [currentQuestions,setCurrentQuestion] = useState(0)
    const [showScore,setShowScore] = useState(false)
    // const [stackScore, setStackScore] = useState(0);

    const [score,setScore] = useState(0)
    const final =nodeJsQuestions.nodeJsQuestions
   

    useEffect(() => {
      storeDetails()
    },[showScore])

    useEffect(() => {
      setCurrentQuestion(JSON.parse(window.localStorage.getItem('currentQuestions')));
    }, []);

    useEffect(() => {
      window.localStorage.setItem('currentQuestions', currentQuestions);
    }, [currentQuestions]);

    function storeDetails () {
      const token = localStorage.getItem("token")
      const details = {
        "nodeScore": (score * 10)
      }
      const config ={
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      axios.post('http://localhost:4194/hire/createEmployeesToHire', details, config )
    }

    //Here we are counting/calculating the score of the user
    const handleAnswersOptionsClick = (isCorrect) => {
      if(isCorrect) {
        setScore(score + 1)
      }
// this is where we are rendering next question on answering the current one 
      const nextQuestion = currentQuestions + 1
      if(nextQuestion < final.length){
        setCurrentQuestion(nextQuestion)
      }else{
        setShowScore(true)
      }
    }
      // this is the function handling previous button
    function handlePreviousQuestion(){
      const previousQuestion = currentQuestions - 1
      setCurrentQuestion(previousQuestion)
    }
console.log(score);
 //Here we are displaying the
 //console.log(reactJsQuestions[currentQuestions].questionText);
  return (
    <div className='app'>
  
      {/* Here we are displaying the the score we user is done with the quiz*/}
      {showScore ? (
        <h3 className='score-container'>{score < 8?  `Ohps!!! Your score is low, ${score *10} % out of ${final.length *10}%` : 
         `Congratulations!!! Your score is ${score *10} % out of ${nodeJsQuestions.length}`}</h3>
      ):(<>
        <div className='question-section'>
          {/* Here we displaying the number of questions answered and the number of questions left to answer */}
          <div className='question-count'> <h3>Question {currentQuestions + 1 }/{final.length}</h3>
          </div>
          {/* Here we are displaying the Questions */}
          <div className='question-text'><h1>{final[currentQuestions].questionText}</h1></div>
        </div>
          {/* This where we are displaying answers to the users */}
        <div className='answer-section'>
          {final[currentQuestions].answersOptions.map((answerOPtion) => (
          <button className='next' onClick={() =>handleAnswersOptionsClick(answerOPtion.isCorrect)}>{answerOPtion.answerText} </button>
          ))}
        </div>
       <button className='previous' onClick={handlePreviousQuestion}>Previous</button>
      </>
      )}
    </div>
  )
}

export default NodeQuestions