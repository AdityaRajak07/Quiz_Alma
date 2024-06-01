// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
 import '@testing-library/jest-dom';


// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addQuiz } from '../../ReduxController/Actions/ActionsScript';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Button } from "@mui/material";
// import "../CSS/CreateQuizPage.css";
// import Container from '@mui/material/Container';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

// const CreateQuizPage = () => {

//   const titleRef = useRef();    // 1. Creating a ref for title input
//   const descriptionRef = useRef();   // 2. Creating a ref for description input
//   const questionRef = useRef();   // 3. Creating a ref for question input
//   const answerRef = useRef();    // 4. Creating a ref for answer input
//   const CorrectAnswerRef = useRef();   // 5. Creating a ref for correct answer checkbox

//   const [count, setCount] = useState(1);   // 6. Creating state to keep track of question count
//   const [added, setAdded] = useState(false);   // 7. Creating state to indicate if a question is added successfully
//   const [answerDone, setAnswerDone] = useState(false);   // 8. Creating state to indicate if at least 2 answers are added
//   const [answers, setAnswers] = useState([]);    // 9. Creating state to store answers for a question
//   const [question, setQuestion] = useState([]);   // 10. Creating state to store questions

//   const dispatch = useDispatch();   // 11. Getting dispatch function from Redux
//   const navigate = useNavigate();   // 12. Getting navigate function from React Router

//   useEffect(() => {    // 13. useEffect to handle added and answerDone states timeout
//     const addedTimeout = setTimeout(() => {
//       if (added) {
//         setAdded(false);
//       }
//     }, 2000);

//     const answerDoneTimeout = setTimeout(() => {
//       if (answerDone) {
//         setAnswerDone(false);
//       }
//     }, 2000);

//     return () => {
//       clearTimeout(addedTimeout);
//       clearTimeout(answerDoneTimeout);
//     };
//   }, [added, answerDone]);

//   const addOptionHandler = (event) => {    // 14. Function to add an option for a question
//     event.preventDefault();
    
//     if (answerRef.current.value === "") {
//       return;
//     }

//     const hasCorrectAnswer = answers.some(answer => answer.correct);   // Check if a correct answer is already added
    
//     if (!hasCorrectAnswer && CorrectAnswerRef.current.checked) {
//       const newAnswer = {
//         answer: answerRef.current.value,
//         correct: true,
//         id: Math.random(),
//       };
//       setAnswers((prev) => [...prev, newAnswer]);
//     } else if (!CorrectAnswerRef.current.checked) {
//       const newAnswer = {
//         answer: answerRef.current.value,
//         correct: false,
//         id: Math.random(),
//       };
//       setAnswers((prev) => [...prev, newAnswer]);
//     }
  
//     answerRef.current.value = "";
//     CorrectAnswerRef.current.checked = false;
//   };

//   const addQuestionHandler = (e) => {    // 15. Function to add a question
//     e.preventDefault();
    
//     if (questionRef.current.value === "") {
//       return alert("Enter question!");
//     }
//     if (questionRef.current.value.length < 10) {
//       return alert("Question must be at least 10 characters long!");
//     }
//     if (answers.length === 0) {
//       return alert("Enter options!");
//     }
    
//     const hasCorrectAnswer = answers.some(answer => answer.correct);   // Check if a correct answer is added
    
//     if (hasCorrectAnswer && answers.length >= 2) {
//       const newQuestion = {
//         question: questionRef.current.value,
//         answers: answers,
//         id: count,
//       };
//       setCount(count + 1);
//       setAdded(true);
//       setQuestion((prev) => [...prev, newQuestion]);
//       setAnswers([]);
//       questionRef.current.value = "";
//     } else if (!hasCorrectAnswer) {
//       return alert("Add a correct answer!");
//     } else {
//       setAnswerDone(true);
//     }
//   };
  
//   const onSaveHandler = (event) => {    // 16. Function to save the quiz
//     event.preventDefault();

//     if (titleRef.current.value === "" || descriptionRef.current.value === "") {
//       return alert("Enter title and description of the quiz!");
//     }
//     if (question.length === 0) {
//       return alert("Add question!");
//     }

//     const Quiz = {
//       description: descriptionRef.current.value,
//       questions: question,
//       title: titleRef.current.value,
//       id: Math.random(),
//       createdOn: new Date(),
//       isActive: true,
//     };

//     const confirmPopup = window.confirm(`Quiz saved successfully!\n\nClick on OK to play the quiz!\nCancel it to view the quiz!`);
    
//     if (confirmPopup) {
//       // User chose to navigate to "Play Quiz" page
//       dispatch(addQuiz(Quiz));
//       setCount(1);
//       titleRef.current.value = "";
//       descriptionRef.current.value = "";
//       navigate("/play-quiz");
//     } else {
//       // User chose to close the pop-up
//       dispatch(addQuiz(Quiz));
//       setCount(1);
//       titleRef.current.value = "";
//       descriptionRef.current.value = "";

//       // Redirecting to create quiz page again
//       navigate("/my-quiz");
//     }
//   };

//   const deleteHandler = (id) => {   // 17. Function to delete an option
//     const newAnswers = answers.filter((el) => el.id !== id);
//     setAnswers(newAnswers);
//   };

//   return (
//     <>
//       <div style={{display:'flex',justifyContent:'right'}}>
//         { added &&
//           <div style={{margin:'10px',height:'60px',width:'200px',justifyContent:'center',alignItems:'center',textAlign:'center',display:'flex',flexDirection:'row'}}>
//             <CheckCircleIcon style={{color:'#33CC99',fontSize:'3vh',marginRight:'1%'}}/>
//             <span style={{color:'#33CC99',fontSize:'2.0vh'}}>Question Added SuccessFully!</span>
//           </div>
//         }
//       </div>
//       <div className="heading">
//         <h1>CREATE NEW QUIZ</h1>
//       </div>
//       <div className="outline">
//         <div className="quizForm">
//           <form action="" onSubmit={onSaveHandler}>
//             <div className="upper">
//               <Container maxWidth="lg" className="formContainer">
//                 <input
//                   type="text"
//                   placeholder="Add Title"
//                   name="title"
//                   className="title"
//                   maxLength={30}
//                   minLength={10}
//                   required
//                   ref={titleRef}
//                   variant="outlined"
//                 /> <br/>
//                 <input
//                   type="text"
//                   className="description"
//                   placeholder="Add Description"
//                   required
//                   ref={descriptionRef}
//                   variant="outlined"
//                 />
//               </Container>                      
//             </div>

//             <h4>ADD QUIZ QUESTIONS</h4><br/>
//             <div className="lower">
//               <Container maxWidth="" className="formContainer">
//                 <div className="QA">
//                   <label htmlFor="question">QUESTION {count}.</label><br/><br/>
//                   <input
//                     type="text "
//                     className="question"
//                     placeholder="Enter your question "
//                     maxLength={200}
//                     ref={questionRef}
//                   />
//                 </div>     

//                 <div className="answerSection">
//                   <input        
//                     type="text"
//                     className="option"
//                     placeholder="Enter options "
//                     ref={answerRef}
//                     variant="outlined"
//                     style={{outline:"none", height:'40px',border : '2px solid #95A5A6',fontSize: '14px'}}
//                   />

//                   <div className="checkBox-1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input
//                         type="checkbox"
//                         id="cbx"
//                         name="correct"
//                         className={'checkbox'}
//                         ref={CorrectAnswerRef}
//                         style={{marginRight:"2%",border:"none", display: "none"}}
//                         variant="outlined "
//                       />
//                       <label htmlFor="cbx" className="check">
//                         <svg width="18px" height="18px" viewBox="0 0 18 18">
//                           <path
//                               d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
//                           <polyline points="1 9 7 14 15 4"></polyline>
//                         </svg>
//                       </label>

//                       <h4 style={{color:"#33CC99",marginLeft:'10px'}}>CORRECT</h4>
//                       <Button sx={{cursor:"pointer"}}  onClick={addOptionHandler}>
//                         <AddCircleOutlineOutlinedIcon fontSize="large" variant="contained" style={{color:"#33CC99"}}/>
//                       </Button>
//                   </div>
//                 </div>
//                 { answerDone &&
//                   <div style={{margin:'10px',height:'60px',width:'300px',justifyContent:'center',alignItems:'center',textAlign:'center',display:'flex',flexDirection:'row'}}>
//                     <ReportGmailerrorredIcon style={{color:'#E67E22',fontSize:'3vh',marginRight:'1%'}}/>
//                     <span style={{color:'#E67E22',fontSize:'2.0vh'}}>Add at Least 2 Options!</span>
//                   </div>
//                 }
//                 <div className="viewAnswer">
//                   {answers.map((el,i) => {
//                     return (
//                       <div
//                         className="optionlist" key={i}
//                         style={
//                           el.correct
//                             ? { background: "#2ECC71",color:"white",width:"45%",height:'40px', border:"none" }
//                             : { background: "white", color:"#282c34",width:"45%" ,height:'40px',border : '2px solid #5DADE1' }
//                           } 
//                       >
//                         <p style={{overflowWrap:"break-word", width:"100px"}}>{el.answer} </p>
//                         <Button
//                           size="small"
//                           onClick={() => deleteHandler(el.id)}
//                           sx={{ height: "50%" }}
//                           style={
//                             el.correct ? { color :'white'} : { color :'#34495E'}
//                           }
//                         >
//                           <DeleteIcon />
//                         </Button>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="questionBtn">
//                   <Button variant="contained #33CC99" onClick={addQuestionHandler}>
//                     ADD QUESTION 
//                   </Button>
//                 </div>
//               </Container>
//             </div>
//             <input style={{cursor:"pointer"}} id="submitBtn" type="submit" value="Submit" variant="contained"/>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateQuizPage;
