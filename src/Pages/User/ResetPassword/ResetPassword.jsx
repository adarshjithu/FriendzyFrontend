import React, { useContext, useEffect } from 'react'
import { colorContext } from '../../../Context/colorContext';
import { TextField, Button } from "@mui/material";
import Icon from '../../../Components/Icon/Icon'
function ResetPassword() {
    
    const theme = useContext(colorContext);
    useEffect(()=>{
     document.title='ResetPassword'
},[])
  return (
    <div className="w-full h-screen bg-[#E0E0E0] d flex justify-center items-center">
    <Icon auth={true} />
    <div className="bg-white h-[70vh]  md:h-[500px] sm:h-[500px]   w-[768px] rounded-[20px] flex m-4 shadow-[2px_2px_15px_grey] ">
         <div className="left h-[100%] flex items-center flex-col justify-center shadow-xl">
              {/* <div className=" w-[100%] md:hidden flex items-center justify-center mt-[20px]">
            <img src="public\Images\login2-removebg-preview.png" alt="" className="w-[30%]" />  
        </div> */}
              <div className="flex justify-center items-center mt-10">
                   <h1 className="text-[35px] font-medium">Reset Password</h1>
              </div>

              <form action="" className="flex flex-col">
                   <div className="p-8 ">
                        <TextField size="small" label="  Old Password" className="w-[100%] mt-[20px]" sx={{marginTop:"20px"}}/>
                        <TextField size="small" label="  New Password" className="w-[100%] mt-[20px]" sx={{marginTop:"20px"}}/>
                        <TextField size="small" label="  Confirm New Password" className="w-[100%] mt-[20px]" sx={{marginTop:"20px"}}/>
                        <Button
                             variant="contained"
                             className="w-[100%]"
                             sx={{
                                  marginTop: "20px",
                                  color: `${theme.normalButton.color}`,
                                  backgroundColor: `${theme.normalButton.backgroundColor}`,
                                  "&:hover": {
                                       backgroundColor: "secondary.main",
                                  },
                             }}
                        >
                             SUBMIT
                        </Button>
                   </div>
              </form>
         </div>

         <div
              className={`right h-[100%]  rounded-r-[20px] rounded-tl-[100px] rounded-bl-[70px] `}
              style={{ backgroundColor: `${theme.themeColor.backgroundColor}` }}
         >
              <div className="flex justify-center items-center mt-10 flex-col ">
                   <h1 className="text-[40px] font-medium text-white">Welcome </h1>
                   <div className=" w-[65%]">
                        <img src="public\Images\login2-removebg-preview.png" alt="" />
                   </div>
                   <div className="">
                        <h3 className={` text-[19px] mt-[20px]`} style={{ color: `${theme.textColor}` }}>
                             Lets Meet New People Around You
                        </h3>
                        <div className="w-[100%] flex justify-center items-center">
                             <Button
                                  variant="contained"
                                  className=" btn w-[50%]"
                                  sx={{
                                       marginTop: "20px",
                                       color: `${theme.normalButton.color}`,
                                       backgroundColor: `${theme.normalButton.backgroundColor}`,
                                       border: "0.5px  solid white",
                                       "&:hover": {
                                            backgroundColor: "secondary.main",
                                       },
                                  }}
                             >
                                  SIGN IN
                             </Button>
                        </div>
                   </div>
              </div>
         </div>
    </div>
</div>
  )
}

export default ResetPassword
