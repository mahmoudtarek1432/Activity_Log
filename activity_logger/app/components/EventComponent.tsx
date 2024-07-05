'use client'
import useEventStore from "@/Client/hooks/eventState";
import SearchBar from "./UtilBar";
import LoggerTableRowData from "./LoggerTableRowData";
import SkeletonRow from "./SkeletonRow";
import LoadBar from "./LoadBar";
import { useEffect } from "react";
import { GetEvents, GetEventsSWR } from "@/Client/Actions/EventActions";
import { pageSize } from "../globals";
import UtilBar from "./UtilBar";

export default function EventComponent() {

    const eventStore = useEventStore();
    var dataFetch = GetEventsSWR(eventStore.page + 1, pageSize, null, { action_id: null, actor_id: null, target_id: null, name: null },
        (data, key, config) => {
            eventStore.updateList(data)
            eventStore.incrementPage()
        }
    )

    useEffect(() => {


    }, [])

    return (
        <>
            <div className="h-screen w-screen ">
                <div className="container w-full rounded-xl shadow">
                    <UtilBar></UtilBar>
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
                                {!dataFetch.isLoading ? dataFetch.data.map(e =>
                                (

                                    <LoggerTableRowData key={e.id}
                                        id={e.id}
                                        actionData={e.actionData}
                                        actorData={e.actorData}
                                        targetData={e.targetData}
                                        date={e.date} >
                                    </LoggerTableRowData>
                                )
                                ) : (
                                    <>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                        <SkeletonRow></SkeletonRow>
                                    </>
                                )}



                            </tbody>
                        </table>
                    </section>
                    <LoadBar></LoadBar>
                </div>
            </div >
        </>
    );
}