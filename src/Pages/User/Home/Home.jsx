import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import SideBar from "../../../Components/SideBar/SideBar";
import Footer from "../../../Components/Footer/Footer";
import Main from "../../../Components/Main/Main";
import RightSidebar from "../../../Components/RightSidebar/RightSidebar";

function Home() {
     return (
          <>
               <Navbar />
               <div className="flex flex-row w-full h-screen  " style={{ overflow: "hidden",position:"fixed",top:'10' }}>
                    <SideBar />
                    <Main />
                    <RightSidebar />*
               </div>

               <Footer />
          </>
     );
}

export default Home;
