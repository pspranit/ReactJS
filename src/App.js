import React, { useEffect, useState } from 'react'

function App() {
  const[data,setData]=useState(null)
  useEffect(()=>
  {
    fetch("http://localhost:1022/courses")
    .then(res=>res.json())
    .then(data=>setData(data))
  })

  return (
    <>
   <center className='mt-5'>
    <b>COURSE INFORMATION</b>
    </center> 
      <div className="container mt-5">

 <table class="table table-bordered table-light">
  <thead>
    <tr>
      <th scope="col">COURSE_ID</th>
      <th scope="col">BATCH_CODE</th>
      <th scope="col">SUBJECT</th>
    </tr>
  </thead>
  <tbody>
  {data && data.map(item=>
    <tr>
      <td>{item.courseId}</td>
      <td>{item.batchCode}</td>
      <td>{item.courseSub}</td>
    </tr>
     )}
    
  </tbody>
</table>     
    </div>
    </>
    
  )
}

export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,setData]=useState(null)
//   useEffect(()=>{
//     fetch("https://api.github.com/users")
//     .then(res=>res.json())
//     .then(data=>setData(data))
//   })
//   return (
//     <div>
//       {data && data.map(item=>
//       <table>
//         <tr>
//           <td>{item.id}</td>
//           <td></td>
//           <td>{item.login}</td>
//           <td></td>
//           <td><img src={item.avatar_url} height='300px' width={'400px'} ></img></td>
//         </tr>
//         <hr />
//       </table>
//         )}
//     </div>
//   )
// }

// export default App


// import Navbar from './component/Navbar';
// import TextForm from './component/TextForm';
// import React, { useState } from 'react';
// import Alert from './component/Alert';
// import About from './component/About'


// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//       document.title = 'TextUtils - Dark Mode';
     
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//       document.title = 'TextUtils - Light Mode';
//     }
//   }
//   return (
//     <>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
//          <About/>
//     </div>
 
//     </> 
//   );
// }

// export default App;
// import React from 'react'
// import "./App.css"
// // import Image from './Image/elephant-1822636_960_720.jpg'
// import Audio from './Audio/kesariya-tera-ishq-hai-piya.mp3'
// import Video from './Video/Deer - 133888.mp4'
// const App=()=>{
//   return(
//     <div>
//       <h1>WELCOME TO REACT JS</h1>
//       <img src='https://cdn.pixabay.com/photo/2022/05/29/03/40/goldfinch-7228334_960_720.jpg' alt='bird' height='500px' widht='49%'></img>
//       <img src={Image} alt='elephant' height='500px' width='49%'></img>
//       <br></br>
//       <a href='https://www.flipkart.com/'target={'_blank'} rel="noreferrer">Click here</a>
//       <br></br>
//       <abbr title='United States Of America'>USA</abbr>
//       <br></br>
//       <iframe width="98%" height="415" src="https://www.youtube.com/embed/vpAJ0s5S2t0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <br></br>
//       <table width='98%' bgcolor='orange' border='50'>
//         <tr>
//           <td>Home</td>
//           <td>About</td>
//           <td>Gallary</td>
//           <td>Contact</td>
//         </tr>

//         <tr>
//           <td>Home</td>
//           <td>About</td>
//           <td>Gallary</td>
//           <td>Contact</td>
//         </tr>

//         <tr>
//           <td>Home</td>
//           <td>About</td>
//           <td>Gallary</td>
//           <td>Contact</td>
//         </tr>

//         <tr>
//           <td>Home</td>
//           <td>About</td>
//           <td colSpan='2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.563475345634!2d73.91381831457755!3d18.503421987419017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f01d18be8b%3A0xbee4723069c2099b!2sJJC%20Colony%2C%20Ramtekadi%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1668483795142!5m2!1sen!2sin" width="98%" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
//           {/* <td>Contact</td> */}
//         </tr>
//       </table>
//       <audio src={Audio} controls></audio>
//       <video className="ps" src={Video} controls autoPlay height='70%' width='70%'></video>
//     </div>
//   )
// }
// export default App
// ******************************************************************************************************************
// import React from 'react'
// import Navbar from './Navbar/Navbar.jsx'

// import Back from "./Background/Back.js"

// const App = () => {
//     return (
//         <>
//        <Navbar/>
//        <Back/>
//         </>
//     )
// }
// export default App
// ******************************************************************************************************************

// import React from 'react'

// // const app1=()=>
// // {
// // FirstName:"pranit"
// // LastName:"sahane"

// const app= () =>
// {
//     function clicked()
//     {
//         document.body.style.backgroundColor="yellow"
//     }

//     function keyup()
//     {
//         document.body.style.backgroundColor="red"
//     }

//     function keydown()
//     {
//         document.body.style.backgroundColor="green"
//     }

//     function mo()
//     {
//         document.body.style.backgroundColor="crimson"
//     }

//     function moo()
//     {
//         document.body.style.backgroundColor="white"
//     }
//     function handlechange()
//     {
//         console.log("handlechanged");
//     }
//     return(
//         <>
//         <button onClick={clicked}>click here</button>
//         <input type="text" onKeyUp={keyup} onKeyDown={keydown} onChange={handlechange}></input>
//         <button onMouseOver={mo} onMouseOut={moo}>crimson</button>
//         {/* <h1>{'my name is ${FirstName} ${LastName}'}</h1>
//         <h2>my name is {FirstName}{LastName}</h2> */}
//         </>
//     )

// }
// export default app
// ******************************************************************************************************************

// import React from 'react'
// import Day1 from './Day1'

// const app= () =>{
//     return(
// <div>
//     <Day1 name="sudesh" company="qspiders"></Day1>
//     <Day1 name="vikas" company="tcs"></Day1>
//     <Day1 name="pranit" company="xyz"></Day1>
// </div>
// )
// }
// export default app

// ******************************************************************************************************************

// import React from 'react'
// import Day2 from './Day2'

// const app= () =>{
//     return(
// <div>
//     <Day2 name="SUDESH" company="qspiders"></Day2>
//     <Day2 name="VIKAS" company="tcs"></Day2>
//     <Day2 name="PRANIT" company="xyz"></Day2>
// </div>
// )
// }
// export default app
// ******************************************************************************************************************

// import React,{useState} from 'react'

// const App= () =>{
//     const[count,setCount]=useState(0)
//     return(
//         <center><div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>click</button>
//         </div>
//         </center>
//     )
// }
// export default App

// ******************************************************************************************************************

// import React,{Component, useState} from 'react'

// const App= () =>{
//     const[message,setMessage]=useState("H!!")
//     return(
//         <center><div>
//             <h1>{message}</h1>
//             <button onClick={()=>setMessage("Bye")}>click</button>
//         </div>
//         </center>
//     )
// }
// export default App
// ******************************************************************************************************************
// import React ,{Component} from 'react'
// export default class App extends Component{
//     constructor(){
//         super()
//         this.state={message:"hii"}
//     }
//     change(){
//         this.setState({message:"bye"})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.change()}>Click</button>
//             </div>
//         )
//     }
// }
