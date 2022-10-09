// import React,{Link} from 'react'
import './AdminPage.css';
import {useParams,Link,useNavigate} from "react-router-dom"


// function alt(){
//   alert('C#')
// }

const AdminPage = () => {
  const {id} = useParams()
  // const navigate = useNavigate()
  // const onSubmit=(e)=>{
  //   e.preventDefault();
  // }
  // console.log("this is my id: ", id);
  return (

      // {/* <button >C#</button> */}


      <div>
<nav className="w3-sidenav w3-white w3-card-2 w3-animate-left" style={{display:"none"}} id="mySidenav">
  <h1 className="w3-xxxlarge w3-text-teal">Side Navigation</h1>
  <a href="javascript.com" onclick="w3_close()" className="w3-closenav w3-xxxlarge w3-text-theme">Close <i className="fa fa-remove"></i></a>
  <a href="javascript.com">Link 1</a>
  <a href="javascript.com">Link 2</a>
  <a href="javascript.com">Link 3</a>
  <a href="javascript.com">Link 4</a>
  <a href="javascript.com">Link 5</a>
</nav>


<header className="w3-container w3-theme w3-padding" id="myHeader">
  <i onclick="w3_open()" className="fa fa-bars w3-xlarge w3-opennav"></i> 
  <div className="w3-center">

  <h1 className="w3-xxxlarge w3-animate-bottom jj">WELCOME<br/>CHOOSE YOUR PREFERRED STACK</h1>
    <div className="w3-padding-32">
      <button className="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style={{fontWeight:"900"}}>Feeling nervous or  not prepared enough?</button><h4>The Course You Need</h4><br/>
    </div>
  </div>
</header>


<div id="id01" className="w3-modal">
    <div className="w3-modal-content w3-card-8 w3-animate-top">
      <header className="w3-container w3-theme-l1"> 
        <span onclick="document.getElementById('id01').style.display='none'" className="w3-closebtn"></span>
        <h4>Oh snap! We just showed you a modal..</h4>
        <h5>Because we can <i className="fa fa-smile-o"></i></h5>
      </header>

      <div className="w3-padding">
        <p>Cool huh? Ok, enough teasing around..</p>
        <p>Go to our <a className="w3-btn" href="/w3css/default.asp">CSS Tutorial</a> to learn more!</p>
      </div>
      <footer className="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
</div>


<div className="w3-row-padding w3-center w3-margin-top all">
<div className="w3-third wa">
  <div className="w3-card-2 w3-padding-top" style={{minHeight:"460px"}}>
  <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
 
  <h1>NODE</h1>
  <p><a href="/noderesources"> <br/><button className='btnn'>Click here</button></a> <br/>to view our world-class preparation resources</p>
 {/* <p>Ready to go?<a href="/nodequestions/"> <br/><br/><button className='btnn'>Click here</button><br/></a> Goodluck Champ!</p> */}
 <p>Ready to go?<Link to="/nodequestions/"> <br/><br/><button className='btnn'>Click here</button><br/></Link> Goodluck Champ!</p>
  </div>
</div>


<div className="w3-third wb">
  <div className="w3-card-2 w3-padding-top" style={{minHeight:"460px"}}>
  
  <i className="fa fa-css3 w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
  <h1>REACT</h1>
  <p>Ready to join other React engineers on this platform? <br/>Write the interview questions<a href="/react"><br/><button className='btnn'>Click here</button></a></p><br/>

  <p>No need for jQuery</p>
  <p>No JavaScript library</p>
  </div>
</div>

<div className="w3-third wc">
  <div className="w3-card-2 w3-padding-top" style={{minHeight:"460px"}}>
  <h1>C#</h1>
  <i className="fa fa-diamond w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
  <p>Boost your interview performance with the best collated C# resources.<a href="/csharpResources"> <br/><button className='btnn'>Click here</button><br/></a>to access them</p><br/>
  <p>Gain access to the best hire platform in Nigeria by <br/>testing your skills <a href="/csharpQuestions"><button className='btnn'>here</button><br/></a></p>

  </div>
</div>

<div className="w3-thirdv  wd">
  <div className="w3-card-2 w3-padding-top" style={{minHeight:"460px"}}>
  <br/><h1>JAVA</h1>
  <i className="fa fa-diamond w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
  <p>Hello Java Dev, prepare for your interview with resources that have been carefully<br/>
  collated by the best team with members in several interview panels</p> <p><br/><a href="/csharpResources"> <button className='btnn'>Click here</button></a></p><p>Take the Java interview <a href="/csharpQuestions"><button className='btnn'> here</button><br/></a>Goodluck!</p>

  </div>
</div>


</div>

</div>





//      
//       

// {/*     
//         <div className='container'>
//       <h1>Welcome User</h1>
//       <p>Choose Your Preferred Stack</p>
//       <h1>Node</h1>
//       <h3>Feeling nervous or  not prepared enough?<a href="/noderesources"> Click here</a> to view our world-class preparation resources</h3>
//       <h3>Ready to go?<a href="/nodequestions"> Click here</a>. Goodluck Champ!</h3>

//       <h1>React</h1>
//       <h3>Ready to join other React engineers on this platform? Write the interview questions<a href="/react"> here</a></h3>
//       <h3>Not prepared? <a href="/reactresources">Here are resources</a> to boost your performance</h3>

//       <h1>C#</h1>
//       <h3>Boost your interview performance with the best collated C# resources.<a href="/csharpResources"> Click here</a>to access them</h3>
//       <h3>Gain access to the best hire platform in Nigeria by testing your skills <a href="/csharpQuestions"> here</a></h3>

//       <h1>Java</h1>
//       <h3>Hello Java Dev, prepare for your interview with resources<a href="/csharpResources"> here</a> that have been carefully<br/> collated by the best team with members in several interview panels</h3>
//       <h3>Take the Java interview<a href="/csharpQuestions"> here </a>. Goodluck!</h3>
//       </div>
//     </div> */}
  )
}

export default AdminPage
