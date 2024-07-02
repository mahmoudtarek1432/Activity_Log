"use client"
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import Image from "next/image";
import { useState } from "react";
import LoggerTablerRowDataDetails from "./LoggerTablerRowDataDetails";



export default function LoggerTableRowData({actionData, actorData, date}:LoggerInfoDetails){

    const [toggled, setToggled] = useState<boolean>(false);
    const [arrowClass, setArrowClass] = useState<string>("transition-all duration-150");

    function toggleDetails() 
    {
        if(toggled){
            setToggled(false);
            setArrowClass(""); 
        }
   else{
        setToggled(true);
        setArrowClass("rotate-90"); 
   }
}
    return (
        <>
            <tr  className="hover:bg-hoverGray cursor-pointer" onClick={toggleDetails}>
                <td className="h-14"> 
                    <span className=" icon inline-block h-6 w-6 gradient-profile text-xs font-bold align-middle leading-6 text-center rounded-full text-white">{actorData.email[0].toUpperCase()}</span>
                    <span className="text inline-block pl-2  leading-6">{actorData.email}</span>
                </td>
                <td className="h-14">{actionData.name}</td>
                <td className="h-14">{date}</td>
                <td>
                    <Image 
                        className={"transition-all duration-200 " + arrowClass}
                        src="/right-arrow.png" 
                        width={13}
                        height={13} 
                        alt="arrow">
                    </Image>
                </td>
            </tr>
            {toggled && 
            (<tr>
             <LoggerTablerRowDataDetails  
                    actionData={actionData}
                    actorData={actorData} 
                    date={date}>
              </LoggerTablerRowDataDetails>
            </tr>)
            }
        </>
    );
}