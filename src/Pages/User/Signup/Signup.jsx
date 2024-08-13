import React, { useContext, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { colorContext } from "../../../Context/colorContext";
import GoogleIcon from "../../../Components/GoogleIcon/GoogleIcon";
import Icon from '../../../Components/Icon/Icon'

function Signup() {
     const theme = useContext(colorContext);
     console.log(theme)
     const [formData,setFormData] = useState({name:"",username:"",email:"",phonenumber:'',password:"",confirmpassword:""})
     useEffect(()=>{
          document.title='Signup'
     },[])
     return (
          <div className="w-full h-screen bg-[#E0E0E0] d flex justify-center items-center">
               <Icon auth={true}/>
               <div className="bg-white h-[80vh] md:h-[500px] sm:h-[500px]   w-[768px] rounded-[20px] flex m-4 shadow-[2px_2px_15px_grey]">
                    <div className="left h-[100%] ">
                         <div className="flex justify-center items-center mt-[45] md:mt-[0px]">
                              <h1 className="text-[30px] font-medium">Sign Up</h1>
                         </div>
                         <form action="" className="flex flex-col">
                              <div className="pl-8 pr-8 ">
                                   
                                   <TextField size="small" label="Name" className="w-[100%]" sx={{ marginTop: "" }} />
                                   <span style={{display:'inline-block',width:"200px"}}></span>
                                   <TextField size="small" label="Email" className="w-[100%]" sx={{ marginTop: "" }} />
                                     <span style={{display:'inline-block',width:"200px"}}></span>
                                   <TextField size="small" label="Phonenumber" className="w-[100%]" sx={{ marginTop: "" }} />
                                     <span style={{display:'inline-block',width:"200px"}}></span>
                                   <TextField size="small" label="Password" className="w-[100%]" sx={{ marginTop: "" }} />
                                     <span style={{display:'inline-block',width:"200px"}}></span>
                                   <TextField size="small" label="Confirm Password" className="w-[100%]" sx={{ marginTop: "" }} />
                                     <span style={{display:'inline-block',width:"200px"}}></span>

                                   
                                   <Button
                                        variant="contained"
                                        className="w-[100%]"
                                        sx={{
                                             marginTop: "",
                                             color: `${theme.normalButton.color}`,
                                             backgroundColor: `${theme.normalButton.backgroundColor}`,
                                             "&:hover": {
                                                  backgroundColor: "secondary.main",
                                             },
                                        }}
                                   >
                                        SIGN UP
                                   </Button>
                                 
                                   {/* <div className="w-[100%] flex justify-center">
                                        <span>---------------Or----------------</span>
                                   </div> */}
                                   <Button
                                        style={{ textTransform: "none" }}
                                        variant="outlined"
                                        className="w-[100%]"
                                        sx={{ marginTop: "20px", color: "#4B164C", borderColor: "#4B164C" }}
                                   >
                                        Signup With Google <GoogleIcon />
                                   </Button>
                              </div>
                         </form>
                    </div>
                    <div className={`right h-[100%]  rounded-r-[20px] rounded-tl-[100px] rounded-bl-[70px]`} style={{backgroundColor:`${theme.themeColor.backgroundColor}`}}>
                         <div className="flex justify-center items-center mt-10 flex-col ">
                              <h1 className="text-[40px] font-medium text-white">Welcome </h1>
                              <div className=" w-[65%]">
                                   <img src="public\Images\login2-removebg-preview.png" alt="" />
                              </div>
                              <div className="">
                                   <h3 className={` text-[19px] mt-[20px]`} style={{color:`${theme.textColor}`}}>Lets Meet New People Around You</h3>
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
     );
}

export default Signup;
