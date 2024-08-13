import React, { useContext, useRef } from "react";
import "./StatusBar.css";
import { colorContext } from "../../Context/colorContext";

function StatusBar() {
     const theme = useContext(colorContext);
     let story = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 5, 6, 7];

     const scrollRef = useRef(null);
     let isDown = false;
     let startX;
     let scrollLeft;

     const handleMouseDown = (e) => {
          isDown = true;
          scrollRef.current.classList.add("active");
          startX = e.pageX - scrollRef.current.offsetLeft;
          scrollLeft = scrollRef.current.scrollLeft;
     };

     const handleMouseLeave = () => {
          isDown = false;
          scrollRef.current.classList.remove("active");
     };

     const handleMouseUp = () => {
          isDown = false;
          scrollRef.current.classList.remove("active");
     };

     const handleMouseMove = (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 2; // Adjust scroll speed
          scrollRef.current.scrollLeft = scrollLeft - walk;
     };
     return (
          <div
               className="mt-[10px] scroll-container w-full h-[18%] bg-white flex flex-row justify-around items-center sticky top-0 overflow-x-auto"
               onMouseDown={handleMouseDown}
               onMouseLeave={handleMouseLeave}
               onMouseUp={handleMouseUp}
               onMouseMove={handleMouseMove}
               ref={scrollRef}
          >
               {story.map((data, index) => {
                    return (
                         <div key={index} className="mr-6">
                              <div
                                   className=" status-outer w-[60px] h-[60px] flex justify-center items-center rounded-[100%]"
                                
                              >
                                <div className="w-[55px] h-[55px] flex justify-center items-center rounded-[100%] bg-white">

                                   <img className="rounded-[100%] w-[90%] h-[90%]" src="public/Images/photo_2024-02-09_18-59-08.jpg" alt="" />
                                </div>
                              </div>
                              <span>Adarsh</span>
                         </div>
                    );
               })}
          </div>
     );
}

export default StatusBar;
