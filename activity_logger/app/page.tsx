import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-screen w-screen ">
      <div className="container w-full">
        <div className="Search-Bar w-full bg-neutral-100 px-4 pt-4 rounded-t-xl">
          <input className="w-full border border-lightGray rounded-lg bg-transparent px-4 h-11" type="text" placeholder="Search name, email or action..." />
        </div>
        <table className="table-fixed w-full border-neutral-100 border">
          <thead className="bg-neutral-100">
            <tr className="uppercase font-semiBold text-sm text-stone-500">
              <th className="text-left font-semiBold text-sm py-4">
                Actor</th>
              <th className="text-left font-semiBold text-sm py-4">Action</th>
              <th className="text-left font-semiBold text-sm py-4">Date</th>
              <th className="w-6"></th>
            </tr>
          </thead>
          <tbody className="text-sm text-DarkGray">
            <tr className="hover:bg-hoverGray">
              <td className="h-14"> 
                <span className=" icon inline-block h-6 w-6 gradient-profile text-xs font-bold align-middle leading-6 text-center rounded-full text-white">A</span>
                <span className="text inline-block pl-2  leading-6">ali@instatus.com</span>
              </td>
              <td className="h-14">user.searched_activity_log_events</td>
              <td className="h-14">Aug 7, 5:38 PM</td>
              <td><Image src="/right-arrow.png" width={13} height={13} alt="arrow"></Image></td>
            </tr>
            <tr className="hover:bg-hoverGray">
              <td className="h-14">
                <span className=" icon inline-block h-6 w-6 gradient-profile text-xs font-bold align-middle leading-6 text-center rounded-full text-white">A</span>
                <span className="text inline-block pl-2  leading-6">ali@instatus.com</span>
              </td>
              <td className="h-14">user.searched_activity_log_events</td>
              <td className="h-14">Aug 7, 5:38 PM</td>
              <td ><Image src="/right-arrow.png" width={13} height={13} alt="arrow"></Image></td>
            </tr>
            <tr className="hover:bg-hoverGray">
              <td className="h-14">
                <span className=" icon inline-block h-6 w-6 gradient-profile text-xs font-bold align-middle leading-6 text-center rounded-full text-white">A</span>
                <span className="text inline-block pl-2 leading-6">ali@instatus.com</span>
              </td>
              <td className="h-14">user.searched_activity_log_events</td>
              <td className="h-14">Aug 7, 5:38 PM</td>
              <td><Image src="/right-arrow.png" width={13} height={13} alt="arrow"></Image></td>
            </tr>
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
        <div className="Load-Bar w-full uppercase bg-neutral-100 h-14 flex flex-wrap justify-center items-center rounded-b-xl font-semibold text-sm text-stone-500">
          <div>Load More</div>
        </div>
      </div>  
    </div>
  </>
  );
}
