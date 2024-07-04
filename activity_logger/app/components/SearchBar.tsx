import Image from "next/image";

export default function SearchBar() {
    return (
        <section className="Search-Bar w-full bg-neutral-100 px-4 pt-4 rounded-t-xl">
            <div className="wrapper w-full border border-lightGray rounded-lg pl-4 h-11 flex">
                <input className="w-full bg-transparent h-full" type="text" placeholder="Search name, email or action..." />
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
        </section>
    )
}