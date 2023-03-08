import React from 'react'
import like from "./like.png"
import list from "./list.png"
import input from "./input.png"

const headerstyle={
   
    height:"90px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadhow:"5px 10px #888888",
    
}

const leftheaderstyle={
    width:"20%",
   
      height:"90px",
      fontSize:"50px",
      marginLeft:"8%"
}

const rightheaderstyle={
    width:"80%",
  
      height:"90px"
}
const rightupperheaderstyle={
    height:"48%",
    width:"90%",
  
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    
}
const rightupper_innerstyle={
    margin:"5px"
}
const rightupper_innerstyle_visit={
    margin:"5px",
    height:"30px",
    color:"white",
    width:"120px",
    backgroundColor:"black"
}
const rightlowerheaderstyle={
    height:"50%",
  
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
const rightlowerinnerstyle={
    margin:"5px"
}
function Header() {
  return (
    <div style={headerstyle}>
      <div style={leftheaderstyle}>AJIO</div>
      <div style={rightheaderstyle}>
        <div style={rightupperheaderstyle}>
            <div style={rightupper_innerstyle}>Sign In/Join AJIO</div>
            <div style={rightupper_innerstyle}>Customer Care</div>
            <div style={rightupper_innerstyle_visit}>visit AJIOLUXE</div>
            
        </div>
        <div style={rightlowerheaderstyle}>
            <div style={rightlowerinnerstyle}>MEN</div>
            <div style={rightlowerinnerstyle}>WOMEN</div>
            <div style={rightlowerinnerstyle}>KIDS</div>
            <div style={rightlowerinnerstyle}>INSIDE</div>
            <div style={rightlowerinnerstyle}>HOME AND KITCHEN</div>
            <img src={input} style={rightlowerinnerstyle}/>
            <img src={like} style={rightlowerinnerstyle}/>
            <img src={list} style={rightlowerinnerstyle}/>

        </div>
      </div>
    </div>
  )
}

export default Header
