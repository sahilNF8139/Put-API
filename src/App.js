import {useState,useEffect}from 'react'
import "./App.css"


function App(){

const[user,setuser]=useState([])
const[name,setname]=useState("")
const[email,setemail]=useState("")
const[lastname,setlastName]=useState("")

const[btn,setbtn]=useState("")


useEffect(()=>{
  fetch("https://crudapi.co.uk/api/v1/kunal",{
    headers:{
      'Authorization':'Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw' 
    }
  })
  .then(Response=>Response.json())
  .then(sahil=>setuser(sahil.items))


  
  console.log("data",user);

},[])
function btnhendler(event){

  setbtn(event.target.value)
}

  return(
    <div>
      <h1>PUT API</h1>
      <table>
       
          <th>Id</th>
          <th>Name</th>
          <th>email</th>
          <th>lastName</th>
          <th>oprations</th>
          
        

     {
      user.map((sk,i)=>
      <tr key={i}>
        {console.log(i)}
        <td>{sk.id}</td>
        <td>{sk.name}</td>
        <td>{sk.email}</td>
        <td>{sk.lastname}</td>
        <td><button onClick={btnhendler} className='maintable'>Delete</button></td>
        <td><button>update</button></td>
      </tr>)

     }
    
      </table>
      <div className='maininput'>
        <input type='text' placeholder='Enter your name'></input>
        <br></br>
        <input type='text' placeholder='Enter your email'></input>
        <br></br>
        <input type='text' placeholder='Enter your lastname'></input>
        <br></br>
      <button>update User </button>
      </div>
    </div>
  );
};
export default App