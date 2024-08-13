import React, { useContext, useState } from "react";
import { colorContext } from "../../Context/colorContext";
import './SideBar.css'
function SideBar() {
     const theme = useContext(colorContext);
     const [hover,setHover] = useState(false)
     const handleMouseOver = (e)=>{
      
           
        
     }
     const handleMouseLeave = (e)=>{
         }
     return (
          <div className="w-[25%] h-[90vh] sidebar sticky top-0" >
               <ul className="ul w-full h-full  p-6">
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium list" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                         <i className="fa-regular fa-bell fa-lg p-5 icon" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span style={{color:`${theme.sidebar.textColor}`,fontSize:"18px",cursor:'pointer',}}>Home</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-solid fa-message fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Message</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-magnifying-glass fa-solid fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Search</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-regular fa-bell fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Notification</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-solid fa-plus fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Create</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-solid fa-user-group fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Request</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-regular fa-bell fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Profile</span>
                    </li>
                    <li className="bg-[#f4f4f4] h-[40px] rounded font-medium ">
                         <i className="fa-solid fa-gear fa-lg p-5" style={{ color: `${theme.sidebar.iconColor}` }}></i>
                         <span   style={{color:`${theme.sidebar.textColor}`,fontSize:"18px"}}>Settings</span>
                    </li>
                
                    
                   
                    
               </ul>
          </div>
     );
}

export default SideBar;
