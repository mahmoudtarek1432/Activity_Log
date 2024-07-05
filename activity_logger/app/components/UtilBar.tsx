import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function UtilBar() {


    return (
        <section className="Search-Bar w-full bg-neutral-100 px-4 pt-4 rounded-t-xl">
            <div className="wrapper w-full border border-lightGray rounded-lg pl-4 h-11 flex">
                <SearchBar></SearchBar>
                <span className="flex-split"></span>

                {/* filter */}
                <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
                <div className="util flex flex-warp justify-center items-center mx-4">
                    <Image src="/filter.svg" width={13} height={13} alt="filter" className="align-middle h-[13px]"></Image>
                    <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">Filter</p>
                </div>

                {/* export */}
                <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
                <div className="util flex flex-warp justify-center items-center mx-4">
                    <Image src="/export.svg" width={13} height={13} alt="export" className="align-middle h-[13px]"></Image>
                    <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">export</p>
                </div>

                {/* live */}
                <div className="bar-splitter h-[100%] w-[1px] bg-lightGray"></div>
                <div className="util flex flex-warp justify-center items-center mx-4">
                    <Image src="/rec.svg" width={13} height={13} alt="live" className="align-middle h-[13px]"></Image>
                    <p className="uppercase align-middle font-normal text-xs mx-1 text-obsedian">live</p>
                </div>
            </div>
        </section>
    )
}