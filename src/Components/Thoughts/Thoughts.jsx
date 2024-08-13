import React from "react";
import "./Thoughts.css";
import { TextField } from "@mui/material";

function Thoughts() {
  
     return (
      <>
          <div className="thoughts">
             <div className="w-[10%]">
              <img src="public/Images/photo_2024-02-09_18-59-08.jpg" className="h-[40px] w-[40px] rounded-[100%]"/>
                
              
             </div>
             <div className="w-[80%]">
              <input  className=" inp w-full h-[40px] bg-[#D9D9D9] rounded-[20px] p-4" placeholder="Whats On Your Mind ?" color="#4B164C" type="text" name="" id="" />
             </div>
             

          </div>
          <div className="thoughts">
            <hr style={{color:'black',width:'95%'}}/>
            
      
          </div>
          <div className="w-full flex flex-row justify-around mt-4">
            <div>
              asdfasdf
            </div>
            <div>
              asdfasdf
            </div>
            <div>
              asdfasdf
            </div>
            
      
          </div>
        
       
      </>
     );
}

export default Thoughts;
