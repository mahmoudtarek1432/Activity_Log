import { Span } from "next/dist/trace";
import Image from "next/image";

import LoggerTableRowData from "@/components/LoggerTableRowData";
import LoggerTablerRowDataDetails from "@/components/LoggerTablerRowDataDetails";
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";

export default function Home() {
  var list: LoggerInfoDetails[] = [
    {
      actionData: {name: "incident.create_succeeded", object: "event_action", id: "evt_action_PGTD81NCAOQ2"},
      actorData: {name: "Baraa Ahmed",address: "user.searched_activity_log_events", email: "baraa@instatus.com", id: "user_DOKVD1U3L030"},
      date: "Aug 7, 5:38 PM"
    },
    {
      actionData: {name: "incident.create_succeeded", object: "event_action", id: "evt_action_PGTD81NCAOQ2"},
      actorData: {name: "Baraa Ahmed",address: "user.searched_activity_log_events", email: "baraa@instatus.com", id: "user_DOKVD1U3L030"},
      date: "Aug 7, 5:38 PM"
    },
    {
      actionData: {name: "incident.create_succeeded", object: "event_action", id: "evt_action_PGTD81NCAOQ2"},
      actorData: {name: "Baraa Ahmed",address: "user.searched_activity_log_events", email: "baraa@instatus.com", id: "user_DOKVD1U3L030"},
      date: "Aug 7, 5:38 PM"
    },
    {
      actionData: {name: "incident.create_succeeded", object: "event_action", id: "evt_action_PGTD81NCAOQ2"},
      actorData: {name: "Baraa Ahmed",address: "user.searched_activity_log_events", email: "baraa@instatus.com", id: "user_DOKVD1U3L030"},
      date: "Aug 7, 5:38 PM"
    }
  ]

  return (
    <>
    <div className="h-screen w-screen ">
      <div className="container w-full rounded-xl shadow">
        <div className="Search-Bar w-full bg-neutral-100 px-4 pt-4 rounded-t-xl">
          <div className="wrapper w-full border border-lightGray rounded-lg pl-4 h-11 flex">
            <input className=" bg-transparent h-full" type="text" placeholder="Search name, email or action..." />
            <span className="flex-split"></span>
            <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
            <div className="util flex flex-warp justify-center items-center mx-4">
              <Image src="/filter.svg" width={13} height={13} alt="export" className="align-middle h-[13px]"></Image>
              <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">Filter</p>
            </div>
            <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
            <div className="util flex flex-warp justify-center items-center mx-4">
              <Image src="/export.svg" width={13} height={13} alt="export" className="align-middle h-[13px]"></Image>
              <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">export</p>
            </div>
            <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
            <div className="util flex flex-warp justify-center items-center mx-4">
              <Image src="/rec.svg" width={13} height={13} alt="export" className="align-middle h-[13px]"></Image>
              <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">live</p>
            </div>
          </div>
        </div>
          <section className="table__body h-[600px] ">
            <table className=" table-fixed w-full ">
            <thead className="bg-neutral-100">
              <tr className="">
                <th className="text-left font-semiBold text-sm py-4 text-stone-500 bg-neutral-100">Actor</th>
                <th className="text-left font-semiBold text-sm py-4 text-stone-500 bg-neutral-100">Action</th>
                <th className="text-left font-semiBold text-sm py-4 text-stone-500 bg-neutral-100">Date</th>
                <th className="w-6 bg-neutral-100"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-DarkGray">
              {list.length > 0 && list.map(e =>
                ( <LoggerTableRowData 
                  actionData={e.actionData}
                  actorData={e.actorData} 
                  date={e.date}>
                </LoggerTableRowData>
                )
               )}
               
            
              {/* skeleton*/ }
              <tr className="hover:bg-hoverGray animate-pulse">
                <td className="h-14">
                  <span className="h-[20px] w-[20px] inline-block align-middle leading-[20px] h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span className="h-2 inline-block ml-2 align-middle leading-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-[140px]"></span>
                </td>
                <td>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[170px]"></div>
                </td>
                <td>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
                </td>
                <td><Image src="/right-arrow.png" width={13} height={13} alt="arrow"></Image></td>
              </tr>
            </tbody>
            </table>  
          </section>
        <div className="Load-Bar w-full uppercase bg-neutral-100 h-14 flex flex-wrap justify-center items-center rounded-b-xl font-semibold text-sm text-stone-500">
          <div>Load More</div>
        </div>
      </div>  
    </div>
  </>
  );
}
