"use client"
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import Image from "next/image";
import { useState } from "react";
import LoggerTablerRowDataDetails from "./LoggerTablerRowDataDetails";
import useEventStore from "@/Client/hooks/eventState";



export default function LoggerTableRowData({ actionData, actorData, date, id }: LoggerInfoDetails) {

    const eventStore = useEventStore();
    const [arrowClass, setArrowClass] = useState<string>("transition-all duration-150");

    function toggleDetails() {
        if (eventStore.toggledEventId == id)
            eventStore.toggle("");
        else
            eventStore.toggle(id);
    }

    return (
        <>
            <tr className="hover:bg-hoverGray cursor-pointer" onClick={toggleDetails}>
                <td className="h-14 flex items-center">
                    <span className=" icon inline-block h-6 w-6 gradient-profile text-xs font-bold align-middle leading-6 text-center rounded-full text-white">{actorData.email[0].toUpperCase()}</span>
                    <span className="text inline-block pl-2 leading-6 w-full overflow-x-hidden text-ellipsis">{actorData.email}</span>
                </td>
                <td className="h-14  overflow-x-hidden text-ellipsis">{actionData.name}</td>
                <td className="h-14  overflow-x-hidden text-ellipsis">{date}</td>
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
            {eventStore.toggledEventId == id &&
                (<tr>
                    <LoggerTablerRowDataDetails
                        loggerInfoDetails={{
                            date: date,
                            actionData: actionData,
                            actorData: actorData,
                            id: id
                        }}
                        onClickAction={toggleDetails}>
                    </LoggerTablerRowDataDetails>
                </tr>)
            }
        </>
    );
}