'use client'
import useEventStore from "@/Client/hooks/eventState";
import SearchBar from "./SearchBar";
import LoggerTableRowData from "./LoggerTableRowData";
import SkeletonRow from "./SkeletonRow";
import LoadBar from "./LoadBar";
import { useEffect } from "react";
import { GetEvents } from "@/Client/Actions/EventActions";

export default function EventComponent() {

    const eventStore = useEventStore();

    useEffect(() => {
        GetEvents(eventStore.page + 1, 1, null, { action_id: null, actor_id: null, target_id: null, name: null }).
            then(e => {
                eventStore.updateList(e)
                eventStore.incrementPage()

            })

    }, [])

    return (
        <>
            <div className="h-screen w-screen ">
                <div className="container w-full rounded-xl shadow">
                    <SearchBar>

                    </SearchBar>
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
                                {eventStore.eventList.length > 0 && eventStore.eventList.map(e =>
                                (

                                    <LoggerTableRowData key={e.id}
                                        id={e.id}
                                        actionData={e.actionData}
                                        actorData={e.actorData}
                                        date={e.date} >
                                    </LoggerTableRowData>
                                )
                                )}


                                {/* skeleton*/}
                                <SkeletonRow></SkeletonRow>
                            </tbody>
                        </table>
                    </section>
                    <LoadBar></LoadBar>
                </div>
            </div >
        </>
    );
}