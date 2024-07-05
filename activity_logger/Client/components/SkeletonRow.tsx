import Image from "next/image";

export default function SkeletonRow() {
    return (
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
    )
}