import React,{useState} from 'react';

import pic from "./images/cc.jpg";
const Connect=()=>
{

    const cssStyle={
        textAlign: 'center',
        color:'#f9f9f9',
        backgroundColor:'#1b2b2b',
        margin:'0px',
        padding:'0px'
      };
      
      const  Time=()=>
      {
        var date=new Date().toLocaleDateString();
        var hour=new Date().getHours();
        console.log(hour);
        let time=new Date().toLocaleTimeString();
       
       const [ctime,setTime]=useState(time);
        
        const newTime=()=>
        {
          let time=new Date().toLocaleTimeString();
          setTime(time);
        }
      
        setInterval(newTime,1000);
        var  greeting=' ';
        if(hour >=0 && hour<12 )
        {greeting='Morning';}
        else if(hour>=12 && hour<16)
        {greeting="Afternoon";}
        else if(hour>=16 && hour<20)
        {greeting="Evening";}
        else
        {greeting="to see you";}
        return (
          <div style={cssStyle}>
          <h1>Hello User, Good {greeting}</h1>
          <h4>{date}  {ctime}</h4>
        </div>
        );
      } 
      
    const [fullname,setfullname]=useState({
        fname:'',
        lname:'',
        email:'',
        eflag:''
      });
      const trigger= (event) => {

        const name=event.target.name;
        const val=event.target.value;
        if(name==='emial') 
        {fullname.eflag='We have recieved your email as:'}
       setfullname((prev)=>{
         return ({...prev,[name]:val});
       });
      };
    return(
        <>
       <div>
       <Time/>

           <div className="row my-5">
               <div className="col">
               <div className="data">
               <h3>Hello {fullname.fname} {fullname.lname}</h3>
                <p>{fullname.eflag} {fullname.email}</p>
                <input type='text' name="fname" placeholder="Enter first name " value={fullname.fname} onChange={trigger} ></input>
                <input type='text' name="lname" placeholder="Enter last name"   value={fullname.lname} onChange={trigger} ></input>
                <input type='mail' name="email" placeholder="Enter email"       value={fullname.email} onChange={trigger} ></input>
               </div>
               </div>
               <div className="col mt-5">
                  <img id="conpic" src={pic} alt="con"/>
               </div>
           </div>

       </div>
        </>
    );
}
export default Connect;